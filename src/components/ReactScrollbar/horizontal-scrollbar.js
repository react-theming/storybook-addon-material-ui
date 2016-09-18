
import React from 'react';

class HorizontalScrollbar extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 0,
            dragging: false,
            start: 0,
        };
    }

    render() {
        const className = (base, name, pos, act, isAct) => [base + name, base + name + pos, isAct ? base + name + act : '', isAct ? base + name + pos + act : ''].join(' ');
        if (this.state.width < 100) return (
      <div
        className={className('-reactjs-scrollbar', '-track', ':horizontal', ':dragging', this.state.dragging || this.props.draggingFromParent)}
        ref="container"
        onClick={this.jump.bind(this)}
        style={{ position: 'absolute' }}
      >

        <div
          className={className('-reactjs-scrollbar', '-thumb', ':horizontal', ':dragging', this.state.dragging || this.props.draggingFromParent)}
          ref="scrollbar"
          onTouchStart={this.startDrag.bind(this)}
          onMouseDown={this.startDrag.bind(this)}
          style={{
              position: 'relative',
              width: this.state.width + '%',
              left: this.props.scrolling + '%',
          }}
        />

      </div>
    );

        else return null;
    }


    startDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

    // Prepare to drag
        this.setState({
            dragging: true,
            start: e.clientX,
        });
    }

    onDrag(e) {
        if (this.state.dragging) {
      // Make The Parent being in the Dragging State
            this.props.onDragging();

            e.preventDefault();
            e.stopPropagation();

            e = e.changedTouches ? e.changedTouches[0] : e;

            const xMovement = e.clientX - this.state.start;
            const xMovementPercentage = xMovement / this.props.wrapper.width * 100;

      // Update the last e.clientX
            this.setState({ start: e.clientX }, () => {
        // The next Horizontal Value will be
                const next = this.props.scrolling + xMovementPercentage;

        // Tell the parent to change the position
                this.props.onChangePosition(next, 'horizontal');
            });
        }
    }

    stopDrag(e) {
        if (this.state.dragging) {
      // Parent Should Change the Dragging State
            this.props.onStopDrag();
            this.setState({ dragging: false });
        }
    }

    jump(e) {
        const isContainer = e.target === this.refs.container;

        if (isContainer) {
      // Get the Element Position
            const position = this.refs.scrollbar.getBoundingClientRect();

      // Calculate the horizontal Movement
            const xMovement = e.clientX - position.left;
            const centerize = (this.state.width / 2);
            const xMovementPercentage = xMovement / this.props.wrapper.width * 100 - centerize;

      // Update the last e.clientX
            this.setState({ start: e.clientX }, () => {
        // The next Horizontal Value will be
                const next = this.props.scrolling + xMovementPercentage;

        // Tell the parent to change the position
                this.props.onChangePosition(next, 'horizontal');
            });
        }
    }

    calculateSize(source) {
    // Scrollbar Width
        this.setState({ width: source.wrapper.width / source.area.width * 100 });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.wrapper.width !== this.props.wrapper.width ||
        nextProps.area.width !== this.props.area.width) this.calculateSize(nextProps);
    }

    componentDidMount() {
        this.calculateSize(this.props);

    // Put the Listener
        document.addEventListener('mousemove', this.onDrag.bind(this));
        document.addEventListener('touchmove', this.onDrag.bind(this));
        document.addEventListener('mouseup', this.stopDrag.bind(this));
        document.addEventListener('touchend', this.stopDrag.bind(this));
    }

    componentWillUnmount() {
    // Remove the Listener
        document.removeEventListener('mousemove', this.onDrag.bind(this));
        document.removeEventListener('touchmove', this.onDrag.bind(this));
        document.removeEventListener('mouseup', this.stopDrag.bind(this));
        document.removeEventListener('touchend', this.stopDrag.bind(this));
    }

}

export default HorizontalScrollbar;
