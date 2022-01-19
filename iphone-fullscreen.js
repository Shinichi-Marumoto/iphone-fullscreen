"use strict";
document.querySelector(':root').style.setProperty('-webkit-user-select', 'none');
document.querySelector(':root').style.setProperty('user-select', 'none');
document.write('<style>html, body { overflow:hidden !important; height:100% !important }</style>');
document.querySelector('body').style.setProperty('margin', '0px');
document.querySelector('body').style.setProperty('padding', '0px');

const _ua = navigator.userAgent.toLowerCase();

if ( (/iphone/.test(_ua)) && !(/crios|edgios/.test(_ua)) ){
  class get_scriptParams {
    constructor() {
      const parameters = document.currentScript.src.substring( document.currentScript.src.indexOf('?') + 1 ).split('&');
      for (let i = 0; i < parameters.length; i++) {
        const element = parameters[ i ].split('='),
              paramName = decodeURIComponent(element[0]),
              paramValue = decodeURIComponent(element[1]);
        this[paramName] = paramValue;
      }
    }
  }
  if (new get_scriptParams()['sab'] == 'true') {
    document.write('<style>html, body { height:calc(100% + env(safe-area-inset-bottom)) !important; }</style>');
  }
  document.write('<style>html, body { overflow:visible !important; }</style>');
  let fs_c = new get_scriptParams()['fsc'];
  if (!fs_c) {
    document.body.innerHTML = '<div id="fsc">' + document.body.innerHTML + '</div>';
    fs_c = 'fsc';
  }
  const _fs_container = document.getElementById(fs_c),
        _fs = document.createElement('div'),
        _fsd = document.createElement('div');

  _fs_container.style.position = 'fixed';
  _fs_container.style.width = '100%';
  _fs_container.style.height = '100%';
  _fs_container.style.touchAction = 'none';
  _fs_container.style.transform = 'translateZ(0)';
  _fs.id = 'fs';
  _fs.style.position = 'absolute';
  _fs.style.top = '0px';
  _fs.style.zIndex = '200';
  _fs.style.display = 'none';
  _fs.style.justifyContent = 'center';
  _fs.style.alignItems = 'center';
  _fs.style.width = '100%';
  _fs.style.height = '100%';
  _fs.style.fontFamily = 'sans-serif';
  _fs.style.color = '#fff';
  _fs.style.backgroundColor = 'RGBA(0,0,0,0.8)';
  _fs.innerHTML = '&#8593;&nbsp;SWIPE';
  _fsd.id = 'fsd';
  _fsd.style.position = 'absolute';
  _fsd.style.zIndex = '-2';
  _fsd.style.width = '100%';
  _fsd.style.height = '100vw';
  _fsd.style.touchAction = 'pan-y';

  _fs_container.appendChild(_fs);
  document.body.insertBefore(_fsd, _fs_container);

  document.addEventListener('DOMContentLoaded', reset_toutch, false);
  window.addEventListener('resize', fs_display, false);

  function _preventDefault(e) { e.preventDefault(); }
  function reset_toutch() {
    _fsd.addEventListener('touchstart', _preventDefault, false);
    _fsd.addEventListener('touchend', function() {
      _fsd.removeEventListener( 'touchstart', _preventDefault, false);
    }, false);
    _fsd.dispatchEvent(new TouchEvent('touchstart', { bubbles:false, cancelable:true }));
    _fsd.dispatchEvent(new TouchEvent('touchend', { bubbles:false, cancelable:true }));
    fs_display();
  }
  function fs_display() {
    _fs.style.display = 'none';
    _fsd.style.zIndex = '-2';
    if ( window.orientation == 0 ) {
      _fs_container.style.height = '100%';
    } else {
      _fs_container.style.height = '100vh';
      if ( screen.width - window.innerHeight <= 20 ) {
        document.addEventListener('touchmove', _preventDefault, false);
      } else if ( screen.width - window.innerHeight > 20 ) {
        document.removeEventListener('touchmove', _preventDefault, false);
        _fs.style.display = 'flex';
        _fsd.style.zIndex = '2';
        window.scrollTo(0, 0);
      }
    }
  }
}
