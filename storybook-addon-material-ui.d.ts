import {DecoratorFunction} from "@storybook/addons";
import {Theme} from "@material-ui/core";

export declare function muiTheme<T = {}>(arg?: Array<Theme>): DecoratorFunction<T>;
