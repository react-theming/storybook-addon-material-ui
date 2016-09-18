
import React from 'react';

class VerticalScrollbar extends React.Component {

    constructor() {
        super();
        this.state = {
            height: 0,
            dragging: false,
            start: 0,
        };
    }

    render() {
        const className = (base, name, pos, act, isAct) => [base + name, base + name + pos, isAct ? base + name + act : '', isAct ? base + name + pos + act : ''].join(' ');
        if (this.state.height < 100) return (
      <div
        className={className('-reactjs-scrollbar', '-track', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent)}
        ref="container"
        onClick={this.jump.bind(this)}
        style={{ position: 'absolute' }}
      >

        <div
          className={className('-reactjs-scrollbar', '-thumb', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent)}
          ref="scrollbar"
          onTouchStart={this.startDrag.bind(this)}
          onMouseDown={this.startDrag.bind(this)}
          style={{
              position: 'relative',
              height: this.state.height + '%',
              top: this.props.scrolling + '%',
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
            start: e.clientY,
        });
    }

    onDrag(e) {
        if (this.state.dragging) {
      // Make The Parent being in the Dragging State
            this.props.onDragging();

            e.preventDefault();
            e.stopPropagation();

            e = e.changedTouches ? e.changedTouches[0] : e;

            const yMovement = e.clientY - this.state.start;
            const yMovementPercentage = yMovement / this.props.wrapper.height * 100;

      // Update the last e.clientY
            this.setState({ start: e.clientY }, () => {
        // The next Vertical Value will be
                const next = this.props.scrolling + yMovementPercentage;

        // Tell the parent to change the position
                this.props.onChangePosition(next, 'vertical');
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

      // Calculate the vertical Movement
            const yMovement = e.clientY - position.top;
            const centerize = (this.state.height / 2);
            const yMovementPercentage = yMovement / this.props.wrapper.height * 100 - centerize;

      // Update the last e.clientY
            this.setState({ start: e.clientY }, () => {
        // The next Vertical Value will be
                const next = this.props.scrolling + yMovementPercentage;

        // Tell the parent to change the position
                this.props.onChangePosition(next, 'vertical');
            });
        }
    }

    calculateSize(source) {
    // Scrollbar Height
        this.setState({ height: source.wrapper.height / source.area.height * 100 });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.wrapper.height !== this.props.wrapper.height ||
        nextProps.area.height !== this.props.area.height) this.calculateSize(nextProps);
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

export default VerticalScrollbar;
