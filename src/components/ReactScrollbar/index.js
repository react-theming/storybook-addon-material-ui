
import React from 'react';

import VerticalScrollbar from './vertical-scrollbar.js';
import HorizontalScrollbar from './horizontal-scrollbar.js';

import '!style!css!sass!./react-scrollbar.scss'; // sass!

class ScrollWrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            ready: false,
            scrollY: null,
            scrollX: null,
            top: 0,
            left: 0,
            scrollAreaHeight: null,
            scrollAreaWidth: null,
            scrollWrapperHeight: null,
            scrollWrapperWidth: null,
            verticalHeight: null,
            vMovement: 0,
            hMovement: 0,
            dragging: false,  // note: dragging - fake pseudo class
            scrolling: false, // changes: scrolling (new fake pseudo class)
            reset: false, // changes: change state without rendering
            start: { y: 0, x: 0 },
        };
    }

// changes: update scrollbars when parent resizing
    componentWillReceiveProps(nextProps) {
        this.calculateSize.bind(this)();
    }

// changes: reset settings without rerendering (need for scrolling state)
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.reset) {
            this.setState({ reset: false });
            return false;
        }
        return true;
    }

    render() {
        const className = (base, name, pos, isDrg, isScr) => [base + name, base + name + pos,
                                                    isDrg ? base + name + ':dragging' : '', isDrg ? base + name + pos + ':dragging' : '',
                                                    isScr ? base + name + ':scrolling' : '', isScr ? base + name + pos + ':scrolling' : ''].join(' ');

        return (
      <div
        onClick={this.calculateSize.bind(this)}
        className={this.props.className}
        ref="scrollWrapper"
        style={{ ...this.props.style, overflow: 'hidden', position: 'relative' }}
      >

        <div
          className={className('-reactjs-scrollbar', '-area', '', this.state.dragging, this.state.scrolling)}
          ref="scrollArea"
          onWheel={this.scroll.bind(this)}
          onTouchStart={this.startDrag.bind(this)}
          onTouchMove={this.onDrag.bind(this)}
          onTouchEnd={this.stopDrag.bind(this)}
          onChange={this.calculateSize.bind(this)}
          style={{ marginTop: this.state.top * -1 + 'px', marginLeft: this.state.left * -1 + 'px' }}
        >

          { this.props.children }

          { this.state.ready ?

            <VerticalScrollbar
              area={{ height: this.state.scrollAreaHeight }}
              wrapper={{ height: this.state.scrollWrapperHeight }}
              scrolling={this.state.vMovement}
              draggingFromParent={this.state.dragging}
              onChangePosition={this.handleChangePosition.bind(this)}
              onDragging={this.handleScrollbarDragging.bind(this)}
              onStopDrag={this.handleScrollbarStopDrag.bind(this)}
            />

          : null }


          { this.state.ready ?

            <HorizontalScrollbar
              area={{ width: this.state.scrollAreaWidth }}
              wrapper={{ width: this.state.scrollWrapperWidth }}
              scrolling={this.state.hMovement}
              draggingFromParent={this.state.dragging}
              onChangePosition={this.handleChangePosition.bind(this)}
              onDragging={this.handleScrollbarDragging.bind(this)}
              onStopDrag={this.handleScrollbarStopDrag.bind(this)}
            />

          : null }

        </div>
      </div>

    );
    }


    scroll(e) {
        e.preventDefault();

    // Make sure the content height is not changed
        this.calculateSize(() => {
      // Set the wheel step
            const num = this.props.speed;

      // DOM events
            const shifted = e.shiftKey;
            const scrollY = e.deltaY > 0 ? num : -(num);
            let scrollX = e.deltaX > 0 ? num : -(num);

      // Fix Mozilla Shifted Wheel~
            if (shifted && e.deltaX == 0) scrollX = e.deltaY > 0 ? num : -(num);

      // Next Value
            const nextY = this.state.top + scrollY;
            const nextX = this.state.left + scrollX;

      // Is it Scrollable?
            const canScrollY = this.state.scrollAreaHeight > this.state.scrollWrapperHeight;
            const canScrollX = this.state.scrollAreaWidth > this.state.scrollWrapperWidth;

      // changes: Set scrolling state before changing position
            this.setState({ scrolling: true }, () => {
        // Vertical Scrolling
                if (canScrollY && !shifted) this.normalizeVertical(nextY, { scrolling: false, reset: true });

        // Horizontal Scrolling
                if (shifted && canScrollX) this.normalizeHorizontal(nextX, { scrolling: false, reset: true });
            });
        });
    }

  // DRAG EVENT JUST FOR TOUCH DEVICE~
    startDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

    // Make sure the content height is not changed
        this.calculateSize(() => {
      // Prepare to drag
            this.setState({
                dragging: true,
                start: { y: e.pageY, x: e.pageX },
            });
        });
    }

    onDrag(e) {
        if (this.state.dragging) {
            e.preventDefault();
            e = e.changedTouches ? e.changedTouches[0] : e;

      // Invers the Movement
            const yMovement = this.state.start.y - e.pageY;
            const xMovement = this.state.start.x - e.pageX;

      // Update the last e.page
            this.setState({ start: { y: e.pageY, x: e.pageX } });

      // The next Vertical Value will be
            const nextY = this.state.top + yMovement;
            const nextX = this.state.left + xMovement;

            this.normalizeVertical(nextY);
            this.normalizeHorizontal(nextX);
        }
    }

    stopDrag(e) {
        this.setState({ dragging: false });
    }

    normalizeVertical(next, nextState) {
    // Vertical Scrolling
        const lowerEnd = this.state.scrollAreaHeight - this.state.scrollWrapperHeight;

    // Max Scroll Down
        if (next > lowerEnd) next = lowerEnd;

    // Max Scroll Up
        else if (next < 0) next = 0;

    // Update the Vertical Value
        this.setState({
            top: next,
            vMovement: next / this.state.scrollAreaHeight * 100,
        }, () => this.setState({ ...nextState })); // changes: update state after operation
    }

    normalizeHorizontal(next, nextState) {
    // Horizontal Scrolling
        const rightEnd = this.state.scrollAreaWidth - this.state.scrollWrapperWidth;

    // Max Scroll Right
        if (next > rightEnd) next = rightEnd;

    // Max Scroll Right
        else if (next < 0) next = 0;

    // Update the Horizontal Value
        this.setState({
            left: next,
            hMovement: next / this.state.scrollAreaWidth * 100,
        }, () => this.setState({ ...nextState })); // changes: update state after operation
    }

    handleChangePosition(movement, orientation) {
    // Make sure the content height is not changed
        this.calculateSize(() => {
      // Convert Percentage to Pixel
            const next = movement / 100;
            if (orientation == 'vertical') this.normalizeVertical(next * this.state.scrollAreaHeight);
            if (orientation == 'horizontal') this.normalizeHorizontal(next * this.state.scrollAreaWidth);
        });
    }

    handleScrollbarDragging() {
        this.setState({ dragging: true });
    }

    handleScrollbarStopDrag() {
        this.setState({ dragging: false });
    }

    getSize() {
    // The Elements
        const $scrollArea = this.refs.scrollArea;
        const $scrollWrapper = this.refs.scrollWrapper;

    // Get new Elements Size
        const elementSize = {
      // Scroll Area Height and Width

            scrollAreaHeight: $scrollArea.getBoundingClientRect().height, // changes: support margin and no one child
            scrollAreaWidth: $scrollArea.children[0].clientWidth, // fixme: not working same way

      // Scroll Wrapper Height and Width
            scrollWrapperHeight: $scrollWrapper.clientHeight,
            scrollWrapperWidth: $scrollWrapper.clientWidth,
        };

        return elementSize;
    }

    calculateSize(cb) { // todo: check performance
        if (typeof (cb) != 'function') cb = null;
        const elementSize = this.getSize();

        if (elementSize.scrollWrapperHeight != this.state.scrollWrapperHeight ||
        elementSize.scrollWrapperWidth != this.state.scrollWrapperWidth ||
        elementSize.scrollAreaHeight != this.state.scrollAreaHeight ||
        elementSize.scrollAreaWidth != this.state.scrollAreaWidth)
    {
      // Set the State!
            this.setState({

        // Scroll Area Height and Width
                scrollAreaHeight: elementSize.scrollAreaHeight,
                scrollAreaWidth: elementSize.scrollAreaWidth,

        // Scroll Wrapper Height and Width
                scrollWrapperHeight: elementSize.scrollWrapperHeight,
                scrollWrapperWidth: elementSize.scrollWrapperWidth,

        // Make sure The wrapper is Ready, then render the scrollbar
                ready: true,
            }, () => cb ? cb() : false);
        }

        else return cb ? cb() : false;
    }

    componentDidMount() {
        this.calculateSize();

    // Attach The Event for Responsive View~
        window.addEventListener('resize', this.calculateSize.bind(this));
    }

    componentWillUnmount() {
    // Remove Event
        window.removeEventListener('resize', this.calculateSize.bind(this));
    }

}

// The Props
ScrollWrapper.propTypes = {
    speed: React.PropTypes.number,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
};

ScrollWrapper.defaultProps = {
    speed: 53,
    className: '',
    style: { },
};

export default ScrollWrapper;
