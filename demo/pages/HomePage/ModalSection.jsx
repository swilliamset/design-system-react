/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

import React from 'react';
import SLDSButton from '../../../components/SLDSButton';
import {ButtonIcon, Icon} from './../../../components/SLDSIcons';
import {default as PrismCode} from 'react-prism/lib/PrismCode';
import {EventUtil} from '../../../components/utils';
import SLDSDateInput from '../../../components/SLDSDateInput';

import SLDSModal from '../../../components/SLDSModal';
import {SLDSModalManager} from '../../../components';






const customStyles = {
  content : {
    position                : 'default',
    top                     : 'default',
    left                    : 'default',
    right                   : 'default',
    bottom                  : 'default',
    border                  : 'default',
    background              : 'default',
    overflow                : 'default',
    WebkitOverflowScrolling : 'default',
    borderRadius            : 'default',
    outline                 : 'default',
    padding                 : 'default'
  },
  overlay : {
    backgroundColor: 'default'
  }
};

module.exports = React.createClass( {

  getDefaultProps () {
    return {};
  },

  getInitialState () {
    return {
      modalIsOpen: false
    };
  },

  openModal () {
    this.setState({modalIsOpen: true});
    SLDSModalManager.trigger(this.getModal());
  },

  closeModal () {
    this.setState({modalIsOpen: false});
  },

  handleSubmitModal () {
    this.closeModal();
  },

  handleButtonClick () {
    alert('Test Button Clicked');
  },

  handleScroll (e) {
//    EventUtil.trap(e);
  },

  getModal () {
    return (<SLDSModal 
                  title={<span>Super Stuff</span>}
                  footer={[
                    <button className='slds-button slds-button--neutral' onClick={this.closeModal}>Cancel</button>,
                    <button className='slds-button slds-button--neutral slds-button--brand' onClick={this.handleSubmitModal}>Save</button>
                  ]}
                  isOpen={true}>

                        <SLDSButton flavor='brand' onClick={this.handleButtonClick}>
                          Test Button
                        </SLDSButton>

                        <div>
                          <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
                            quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
                          <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
                            nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
                        </div>
{/*
                        <SLDSModal 
                          title={<span>Super Stuff</span>}
                          isOpen={true}>
                            AAA
                            AAA
                          </SLDSModal>
*/}
                </SLDSModal>);
  },

  render() {
    return (


            <div className='slds-p-around--medium'>

              <h3 className='slds-text-heading--medium slds-truncate'>
                Modal (Work in progress)
              </h3>
{/*
              <PrismCode className='language-markup'>
                {require("raw-loader!../../code-snippets/SLDSLookupPage.txt")}
              </PrismCode>
*/}

              <div className='slds-p-vertical--large'>
                <SLDSButton flavor='brand' onClick={this.openModal}>
                  Open Modal
                </SLDSButton>

                {this.getModal()}

              </div>
            </div>


    );
  },

  componentDidUpdate (prevProps, prevState) {
    if(this.state.modalIsOpen){
      if(window && document && document.body){
        document.body.style.overflow = 'hidden';
      }
    }
    else{
      if(window && document && document.body){
        document.body.style.overflow = 'inherit';
      }
    }
  }


});