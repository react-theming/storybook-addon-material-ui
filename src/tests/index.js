import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

import ThemeProvider from 'react-theme-provider';
import greyTheme from '../.themes/03_greyTheme.json';
import setCSS from '../.themes/setCSS';

import Header from '../Header';
import App from '../App';
import Intro from '../Intro';

describe('### Storybook Boilerplate Project \n\n', () => {
    describe('Header Component', () => {
        const title = 'Storybook Boilerplate';
        const subtitle = 'react-theming';

        const wrapper = shallow(
          <Header {...{title, subtitle}}/>,
          { context: { muiTheme: greyTheme }}
        );

        it('should have title & subtitle', () => {
            expect(wrapper.find('h2').text()).to.be.equal(title);
            expect(wrapper.find('h3').text()).to.be.equal(subtitle);
        });

        it(`Title color should be palette.alternateTextColor = ${greyTheme.palette.alternateTextColor}`, () => {
            expect(wrapper.find('h2').prop('style'))
              .to.include.keys('color');
            expect(wrapper.find('h2').prop('style').color)
              .to.be.equal(greyTheme.palette.alternateTextColor);
        });

        it(`Subtitle color should be palette.alternate1Color = ${greyTheme.palette.alternate1Color}`, () => {
            expect(wrapper.find('h3').prop('style'))
              .to.include.keys('color');
            expect(wrapper.find('h3').prop('style').color)
              .to.be.equal(greyTheme.palette.alternate1Color);
        });

    });

    describe('Intro Component', () => {
        const className='react-theme-provider';
        const style = setCSS(greyTheme.palette, className);

        const wrapper = shallow(
          <ThemeProvider
            themes={[greyTheme]}
            setCSS={setCSS}
          >
            <Intro />
          </ThemeProvider>
        );

        console.log( wrapper.childAt(0).type() );
//        console.log(wrapper.find('link').prop('href'));

        it(`should set CSS styles for class .${className}`, () => {

          expect(wrapper.childAt(0).type()).to.be.equal('link');
          expect(wrapper.childAt(0).prop('href')).to.contain(style);
        });
    });

  /*
    describe('PanelContainer', () => {
        const channel = {
            callback: () => {},
            on: (id, callback) => {
                this.callback = callback;
            },
            emit: (id, data) => {
                console.log(data);
            },
        };
        const PanelContainerWrapper = shallow(<PanelContainer channel={channel} api={{ }} />);

        it('should have init text', () => {
            const div = PanelContainerWrapper.find('div');
            expect(div.text()).to.be.equal('waiting for muiTheme decorator...');
        });
    });*/
});
