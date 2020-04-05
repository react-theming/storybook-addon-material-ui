import { styled } from '@storybook/theming';
import { Block } from '@storybook/addon-devkit';

export const Container = styled(Block)`
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  height: auto;
  label: Container;
`;

export const ThemeHolder = styled.div`
  height: auto;
  overflow: auto;
  flex-grow: 1;
  label: ThemeHolder;
`;

const copyIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAIAAABj86gYAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AQFFwEWd/mUIwAAAEVpVFh0Q29tbWVudAAAAAAAQ1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODUKGyjZMgAAA7RJREFUOMuNlT1LM0sUx+d13yQSk8ZGVAS7IGgqQWy0twhEJGgsg9jlE9jbKLHVPn4AQYVgrRJEjdpY2KRzSbIvMzsze4sDuXkec+VONezO/M6c8/+fGTQYDKIoEkL0er04jqMo6vf7QoggCOI4vr29nZubQ7+OYrH4+PiotR6LwlEU/dfObrc7Pz9fqVRqtZrWOk1TQkiapsMJQghjXK/XPz4+Xl9fs9nsTwgWQhhj0jRljCmlMMaUUqUU59z3/a+vL865EAJYAJ2Zmcnn81prjLHWutPpLC8v39/fFwqFIUprjRCilKJerxdFkZTy+/tbCBGGoe/7Sqmbm5tfynJ5eSmlDIIgTdN2u40Qenl5GaJ834cS+b7PLMtK01Qp5XmeMQZj7Lput9vd2Ng4PDysVqtw6jRNIQPLsorFYqlUuri42NvbC8OQMYYQCsNwiHJd1xiDEHJdlw1LCSkjhLTWz8/PGOODg4PZ2dm/zm7bNiyD2Ds7O0CglI5FEaUU/JZSgnRSSkopxlgIAcIghGACh11cXIRg+/v7rVYLWJZlJUkyRMFHKSWzLMsYAyUCkT3Pk1IihBzH6ff77XZba6215py7rru0tNRsNk9OToIgeHt729raen9/hxLZtv0ThYIgiKIojuPBYADKDAaDq6srQkin0zk9Pf3Dcxj7vh+GYZIkSqlGo4EQ+vz8RAi12+2xqH81gMlQT4SQUqpcLi8sLBBCGGNCiGw26zgOWBAcORp7LIpxzo0xWmvHcZIkwRg7jgN1t207k8lsbm6maaq1BhnASEqpoaqUUoRQHMeWZWmtlVKjKJYkCaWUEBLHMec8TdM4jkFMKWWr1dre3h61KRxtcnLy4eFhmCgIBu5gjP2BgvjQfrCfMQYuZoxxzguFAsYYzAeLtdZTU1PDYIQQCAN/jTGjKEYphXuGcw55DRudELK6unp3d2eMgW1Dy4IRgTIaQGttjAHLAoolSUII+atEnHOEkBCi3++fnZ3B7WaMAZbWOp/PVyqV/1UizjnYfFQZaBnP85rNZr1e/3kXEULW1tYgg+PjY8dxMpnMeJF/t+nu7m65XAabjd6RSqlcLgfrG43G9fX19PT0eJsqpaBEUkoQR0oJPWmMcV3XsiyMMSFkVGQQLwxDMBuwxqIw9KTW2vO8KIoopZZl+b6fy+XW19ePjo7AVEmS2LYNLMuy4CoulUrVavX8/FwIIYSYmJhIkgRQcRxjjG3bRtG4IYR4enpaWVn5/bGs1WrwBvwy/gFeYm1QoWPmOAAAAABJRU5ErkJggg==';

export const Copy = styled.button`
  background-color: unset;
  border: none;
  background: url(${copyIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 35px;
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

export const SelectedCard = styled.div`
  background-color: #f6f9fc;
  padding: 12px;
  margin-top: 4px;
  font-size: 16px;
`;
