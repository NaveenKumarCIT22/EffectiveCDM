import {
  require_react_dom
} from "./chunk-SRAQOA3L.js";
import {
  require_jsx_runtime
} from "./chunk-BU3YUUBE.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i2, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a[i2], b[i2]))
              return false;
          return true;
        }
        var it2;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i2 = it2.next()).done)
            if (!b.has(i2.value[0]))
              return false;
          it2 = a.entries();
          while (!(i2 = it2.next()).done)
            if (!equal(i2.value[1], b.get(i2.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i2 = it2.next()).done)
            if (!b.has(i2.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (a[i2] !== b[i2])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i2]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i2 = length; i2-- !== 0; ) {
          if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i2]], b[keys[i2]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format3, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format3.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format3, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format3 === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format3].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i2 = 0, tmp, x, str = "";
  while (i2 < arguments.length) {
    if (tmp = arguments[i2++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min3, value, max3) {
  return max(min3, min(value, max3));
}
function withinMaxClamp(min3, value, max3) {
  var v = within(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets3) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets3[axis] - state.rects.popper[len];
  var startDiff = popperOffsets3[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper3 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper3);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper3)) {
      offsetParent = getDocumentElement(popper3);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper3)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents3 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents3.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents3 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents3[0];
  var clippingRect = clippingParents3.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference3 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference3.x + reference3.width / 2 - element.width / 2;
  var commonY = reference3.y + reference3.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference3.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference3.y + reference3.height
      };
      break;
    case right:
      offsets = {
        x: reference3.x + reference3.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference3.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference3.x,
        y: reference3.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference3[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference3[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets3 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets3));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i2 = 0; i2 < placements3.length; i2++) {
    var placement = placements3[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset3) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets3) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets3[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min3, tetherMin) : min3, offset3, tether ? max(max3, tetherMax) : max3);
    popperOffsets3[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets3[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets3[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn3) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn3(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers5 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper7(reference3, popper3, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference3,
        popper: popper3
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference3) ? listScrollParents(reference3) : reference3.contextElement ? listScrollParents(reference3.contextElement) : [],
          popper: listScrollParents(popper3)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers5, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper3), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference4 = _state$elements.reference, popper4 = _state$elements.popper;
        if (!areValidElements(reference4, popper4)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference4, getOffsetParent(popper4), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper4)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference3, popper3)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect7 = _ref3.effect;
        if (typeof effect7 === "function") {
          var cleanupFn = effect7({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn3(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper7 = options.createPopper || createPopper3;
    var popperInstance = createPopper7(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/enums.js
var top2 = "top";
var bottom2 = "bottom";
var right2 = "right";
var left2 = "left";
var auto2 = "auto";
var basePlacements2 = [top2, bottom2, right2, left2];
var start2 = "start";
var end2 = "end";
var clippingParents2 = "clippingParents";
var viewport2 = "viewport";
var popper2 = "popper";
var reference2 = "reference";
var variationPlacements2 = basePlacements2.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start2, placement + "-" + end2]);
}, []);
var placements2 = [].concat(basePlacements2, [auto2]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start2, placement + "-" + end2]);
}, []);
var beforeRead2 = "beforeRead";
var read2 = "read";
var afterRead2 = "afterRead";
var beforeMain2 = "beforeMain";
var main2 = "main";
var afterMain2 = "afterMain";
var beforeWrite2 = "beforeWrite";
var write2 = "write";
var afterWrite2 = "afterWrite";
var modifierPhases2 = [beforeRead2, read2, afterRead2, beforeMain2, main2, afterMain2, beforeWrite2, write2, afterWrite2];

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName2(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow2(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement2(node) {
  var OwnElement = getWindow2(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement2(node) {
  var OwnElement = getWindow2(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles2(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement2(element) || !getNodeName2(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect4(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement2(element) || !getNodeName2(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default2 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles2,
  effect: effect4,
  requires: ["computeStyles"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/math.js
var max2 = Math.max;
var min2 = Math.min;
var round2 = Math.round;

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect2(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement2(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round2(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round2(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect2(element) {
  var clientRect = getBoundingClientRect2(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains2(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot2(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle3(element) {
  return getWindow2(element).getComputedStyle(element);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement2(element) {
  return ["table", "td", "th"].indexOf(getNodeName2(element)) >= 0;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement2(element) {
  return ((isElement2(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode2(element) {
  if (getNodeName2(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot2(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement2(element)
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent2(element) {
  if (!isHTMLElement2(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle3(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock2(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle3(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  if (isShadowRoot2(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName2(currentNode)) < 0) {
    var css = getComputedStyle3(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent2(element) {
  var window2 = getWindow2(element);
  var offsetParent = getTrueOffsetParent2(element);
  while (offsetParent && isTableElement2(offsetParent) && getComputedStyle3(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent2(offsetParent);
  }
  if (offsetParent && (getNodeName2(offsetParent) === "html" || getNodeName2(offsetParent) === "body" && getComputedStyle3(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock2(element) || window2;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement2(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/within.js
function within2(min3, value, max3) {
  return max2(min3, min2(value, max3));
}
function withinMaxClamp2(min3, value, max3) {
  var v = within2(min3, value, max3);
  return v > max3 ? max3 : v;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject2(paddingObject) {
  return Object.assign({}, getFreshSideObject2(), paddingObject);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap2(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject3 = function toPaddingObject4(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject2(typeof padding !== "number" ? padding : expandToHashMap2(padding, basePlacements2));
};
function arrow2(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement2(state.placement);
  var axis = getMainAxisFromPlacement2(basePlacement);
  var isVertical = [left2, right2].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets3) {
    return;
  }
  var paddingObject = toPaddingObject3(options.padding, state);
  var arrowRect = getLayoutRect2(arrowElement);
  var minProp = axis === "y" ? top2 : left2;
  var maxProp = axis === "y" ? bottom2 : right2;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets3[axis] - state.rects.popper[len];
  var startDiff = popperOffsets3[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent2(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset3 = within2(min3, center, max3);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset3, _state$modifiersData$.centerOffset = offset3 - center, _state$modifiersData$);
}
function effect5(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement2(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains2(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default2 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow2,
  effect: effect5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation2(placement) {
  return placement.split("-")[1];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides2 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR2(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round2(x * dpr) / dpr || 0,
    y: round2(y * dpr) / dpr || 0
  };
}
function mapToStyles2(_ref2) {
  var _Object$assign2;
  var popper3 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left2;
  var sideY = top2;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent2(popper3);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow2(popper3)) {
      offsetParent = getDocumentElement2(popper3);
      if (getComputedStyle3(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top2 || (placement === left2 || placement === right2) && variation === end2) {
      sideY = bottom2;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left2 || (placement === top2 || placement === bottom2) && variation === end2) {
      sideX = right2;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides2);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR2({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles2(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle3(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement2(state.placement),
    variation: getVariation2(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles2(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles2(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default2 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles2,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive2 = {
  passive: true
};
function effect6(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow2(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive2);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive2);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive2);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive2);
    }
  };
}
var eventListeners_default2 = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn2() {
  },
  effect: effect6,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement2(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash3[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash4 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement2(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash4[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll2(node) {
  var win = getWindow2(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX2(element) {
  return getBoundingClientRect2(getDocumentElement2(element)).left + getWindowScroll2(element).scrollLeft;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect2(element) {
  var win = getWindow2(element);
  var html = getDocumentElement2(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX2(element),
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect2(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement2(element);
  var winScroll = getWindowScroll2(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX2(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle3(body || html).direction === "rtl") {
    x += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent2(element) {
  var _getComputedStyle = getComputedStyle3(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent2(node) {
  if (["html", "body", "#document"].indexOf(getNodeName2(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement2(node) && isScrollParent2(node)) {
    return node;
  }
  return getScrollParent2(getParentNode2(node));
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents2(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow2(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent2(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents2(getParentNode2(target)))
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect2(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect2(element) {
  var rect = getBoundingClientRect2(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType2(element, clippingParent) {
  return clippingParent === viewport2 ? rectToClientRect2(getViewportRect2(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect2(clippingParent) : rectToClientRect2(getDocumentRect2(getDocumentElement2(element)));
}
function getClippingParents2(element) {
  var clippingParents3 = listScrollParents2(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle3(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent2(element) : element;
  if (!isElement2(clipperElement)) {
    return [];
  }
  return clippingParents3.filter(function(clippingParent) {
    return isElement2(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName2(clippingParent) !== "body";
  });
}
function getClippingRect2(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents2(element) : [].concat(boundary);
  var clippingParents3 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents3[0];
  var clippingRect = clippingParents3.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType2(element, clippingParent);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType2(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets2(_ref) {
  var reference3 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement2(placement) : null;
  var variation = placement ? getVariation2(placement) : null;
  var commonX = reference3.x + reference3.width / 2 - element.width / 2;
  var commonY = reference3.y + reference3.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top2:
      offsets = {
        x: commonX,
        y: reference3.y - element.height
      };
      break;
    case bottom2:
      offsets = {
        x: commonX,
        y: reference3.y + reference3.height
      };
      break;
    case right2:
      offsets = {
        x: reference3.x + reference3.width,
        y: commonY
      };
      break;
    case left2:
      offsets = {
        x: reference3.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference3.x,
        y: reference3.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement2(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start2:
        offsets[mainAxis] = offsets[mainAxis] - (reference3[len] / 2 - element[len] / 2);
        break;
      case end2:
        offsets[mainAxis] = offsets[mainAxis] + (reference3[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow2(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents2 : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport2 : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper2 : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject2(typeof padding !== "number" ? padding : expandToHashMap2(padding, basePlacements2));
  var altContext = elementContext === popper2 ? reference2 : popper2;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect2(isElement2(element) ? element : element.contextElement || getDocumentElement2(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect2(state.elements.reference);
  var popperOffsets3 = computeOffsets2({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect2(Object.assign({}, popperRect, popperOffsets3));
  var elementClientRect = elementContext === popper2 ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper2 && offsetData) {
    var offset3 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right2, bottom2].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top2, bottom2].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset3[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement2(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements2 : _options$allowedAutoP;
  var variation = getVariation2(placement);
  var placements3 = variation ? flipVariations ? variationPlacements2 : variationPlacements2.filter(function(placement2) {
    return getVariation2(placement2) === variation;
  }) : basePlacements2;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow2(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement2(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements2(placement) {
  if (getBasePlacement2(placement) === auto2) {
    return [];
  }
  var oppositePlacement = getOppositePlacement2(placement);
  return [getOppositeVariationPlacement2(placement), oppositePlacement, getOppositeVariationPlacement2(oppositePlacement)];
}
function flip2(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement2(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement2(preferredPlacement)] : getExpandedFallbackPlacements2(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement2(placement2) === auto2 ? computeAutoPlacement2(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i2 = 0; i2 < placements3.length; i2++) {
    var placement = placements3[i2];
    var _basePlacement = getBasePlacement2(placement);
    var isStartVariation = getVariation2(placement) === start2;
    var isVertical = [top2, bottom2].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow2(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right2 : left2 : isStartVariation ? bottom2 : top2;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement2(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement2(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default2 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip2,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets2(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped2(overflow) {
  return [top2, right2, bottom2, left2].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide2(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow2(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow2(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets2(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets2(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped2(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped2(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default2 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide2
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY2(placement, rects, offset3) {
  var basePlacement = getBasePlacement2(placement);
  var invertDistance = [left2, top2].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset3 === "function" ? offset3(Object.assign({}, rects, {
    placement
  })) : offset3, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left2, right2].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset2(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset3 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements2.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY2(placement, state.rects, offset3);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default2 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset2
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets2(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets2({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default2 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets2,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis2(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow2(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow2(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement2(state.placement);
  var variation = getVariation2(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement2(basePlacement);
  var altAxis = getAltAxis2(mainAxis);
  var popperOffsets3 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets3) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top2 : left2;
    var altSide = mainAxis === "y" ? bottom2 : right2;
    var len = mainAxis === "y" ? "height" : "width";
    var offset3 = popperOffsets3[mainAxis];
    var min3 = offset3 + overflow[mainSide];
    var max3 = offset3 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start2 ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start2 ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect2(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject2();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within2(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent2(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset3 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset3 + maxOffset - offsetModifierValue;
    var preventedOffset = within2(tether ? min2(min3, tetherMin) : min3, offset3, tether ? max2(max3, tetherMax) : max3);
    popperOffsets3[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset3;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top2 : left2;
    var _altSide = mainAxis === "x" ? bottom2 : right2;
    var _offset = popperOffsets3[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top2, left2].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp2(_tetherMin, _offset, _tetherMax) : within2(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets3[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default2 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow2,
  requiresIfExists: ["offset"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll2(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll2(node) {
  if (node === getWindow2(node) || !isHTMLElement2(node)) {
    return getWindowScroll2(node);
  } else {
    return getHTMLElementScroll2(node);
  }
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled2(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round2(rect.width) / element.offsetWidth || 1;
  var scaleY = round2(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect2(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent);
  var offsetParentIsScaled = isHTMLElement2(offsetParent) && isElementScaled2(offsetParent);
  var documentElement = getDocumentElement2(offsetParent);
  var rect = getBoundingClientRect2(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName2(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent2(documentElement)) {
      scroll = getNodeScroll2(offsetParent);
    }
    if (isHTMLElement2(offsetParent)) {
      offsets = getBoundingClientRect2(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX2(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order2(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers2(modifiers) {
  var orderedModifiers = order2(modifiers);
  return modifierPhases2.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce2(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/format.js
function format2(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR2 = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR2 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES2 = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers2(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES2).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format2(INVALID_MODIFIER_ERROR2, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases2.indexOf(modifier.phase) < 0) {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"phase"', "either " + modifierPhases2.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format2(INVALID_MODIFIER_ERROR2, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES2.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format2(MISSING_DEPENDENCY_ERROR2, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy2(arr, fn3) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn3(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName2(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR2 = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR2 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS2 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator2(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers5 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS2 : _generatorOptions$def2;
  return function createPopper7(reference3, popper3, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS2, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference3,
        popper: popper3
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement2(reference3) ? listScrollParents2(reference3) : reference3.contextElement ? listScrollParents2(reference3.contextElement) : [],
          popper: listScrollParents2(popper3)
        };
        var orderedModifiers = orderModifiers2(mergeByName2([].concat(defaultModifiers5, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy2([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers2(modifiers);
          if (getBasePlacement2(state.options.placement) === auto2) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle3(popper3), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference4 = _state$elements.reference, popper4 = _state$elements.popper;
        if (!areValidElements2(reference4, popper4)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR2);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect2(reference4, getOffsetParent2(popper4), state.options.strategy === "fixed"),
          popper: getLayoutRect2(popper4)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR2);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements2(reference3, popper3)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR2);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect7 = _ref3.effect;
        if (typeof effect7 === "function") {
          var cleanupFn = effect7({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper4 = popperGenerator2();

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers3 = [eventListeners_default2, popperOffsets_default2, computeStyles_default2, applyStyles_default2];
var createPopper5 = popperGenerator2({
  defaultModifiers: defaultModifiers3
});

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers4 = [eventListeners_default2, popperOffsets_default2, computeStyles_default2, applyStyles_default2, offset_default2, flip_default2, preventOverflow_default2, arrow_default2, hide_default2];
var createPopper6 = popperGenerator2({
  defaultModifiers: defaultModifiers4
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".dropdown-menu .active{color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")), document.head.appendChild(o);
    }
  } catch (d) {
    console.error("vite-plugin-css-injected-by-js", d);
  }
})();
var $e = import_react.default.forwardRef(
  ({ breakpoint: e, fluid: t, children: r, className: s, tag: n, ...a }, c) => {
    const o = clsx_m_default(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, s);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: r });
  }
);
$e.defaultProps = { tag: "div" };
var Ee = import_react.default.forwardRef(
  ({
    center: e,
    children: t,
    className: r,
    end: s,
    lg: n,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: l,
    order: u,
    size: f,
    sm: p,
    start: d,
    tag: b,
    xl: g,
    xxl: h,
    xs: v,
    ...y
  }, D) => {
    const $ = clsx_m_default(
      f && `col-${f}`,
      v && `col-xs-${v}`,
      p && `col-sm-${p}`,
      a && `col-md-${a}`,
      n && `col-lg-${n}`,
      g && `col-xl-${g}`,
      h && `col-xxl-${h}`,
      !f && !v && !p && !a && !n && !g && !h ? "col" : "",
      u && `order-${u}`,
      d && "align-self-start",
      e && "align-self-center",
      s && "align-self-end",
      l && `offset-sm-${l}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      r
    );
    return (0, import_jsx_runtime.jsx)(b, { className: $, ref: D, ...y, children: t });
  }
);
Ee.defaultProps = { tag: "div" };
var Ce = import_react.default.forwardRef(
  ({ className: e, color: t, pill: r, light: s, dot: n, tag: a, children: c, notification: o, ...l }, u) => {
    const f = clsx_m_default(
      "badge",
      s ? t && `badge-${t}` : t && `bg-${t}`,
      n && "badge-dot",
      r && "rounded-pill",
      o && "badge-notification",
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: f, ref: u, ...l, children: c });
  }
);
Ce.defaultProps = { tag: "span", color: "primary" };
var Pe = ({ ...e }) => {
  const [t, r] = (0, import_react.useState)(false), s = clsx_m_default("ripple-wave", t && "active");
  return (0, import_react.useEffect)(() => {
    const n = setTimeout(() => {
      r(true);
    }, 50);
    return () => {
      clearTimeout(n);
    };
  }, []), (0, import_jsx_runtime.jsx)("div", { className: s, ...e });
};
var Ie = (...e) => {
  const t = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((r) => {
      r && (typeof r == "function" ? r(t.current) : r.current = t.current);
    });
  }, [e]), t;
};
var be = import_react.default.forwardRef(
  ({
    className: e,
    rippleTag: t,
    rippleCentered: r,
    rippleDuration: s,
    rippleUnbound: n,
    rippleRadius: a,
    rippleColor: c,
    children: o,
    onMouseDown: l,
    ...u
  }, f) => {
    const p = (0, import_react.useRef)(null), d = Ie(f, p), b = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", g = [0, 0, 0], h = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [v, y] = (0, import_react.useState)([]), [D, $] = (0, import_react.useState)(false), x = clsx_m_default(
      "ripple",
      "ripple-surface",
      n && "ripple-surface-unbound",
      D && `ripple-surface-${c}`,
      e
    ), M = () => {
      if (h.find((E) => E === (c == null ? void 0 : c.toLowerCase())))
        return $(true);
      {
        const E = A(c).join(",");
        return `radial-gradient(circle, ${b.split("{{color}}").join(`${E}`)})`;
      }
    }, A = (w) => {
      const E = (B) => (B.length < 7 && (B = `#${B[1]}${B[1]}${B[2]}${B[2]}${B[3]}${B[3]}`), [parseInt(B.substr(1, 2), 16), parseInt(B.substr(3, 2), 16), parseInt(B.substr(5, 2), 16)]), R = (B) => {
        const S = document.body.appendChild(document.createElement("fictum")), k = "rgb(1, 2, 3)";
        return S.style.color = k, S.style.color !== k || (S.style.color = B, S.style.color === k || S.style.color === "") ? g : (B = getComputedStyle(S).color, document.body.removeChild(S), B);
      }, W = (B) => (B = B.match(/[.\d]+/g).map((S) => +Number(S)), B.length = 3, B);
      return w.toLowerCase() === "transparent" ? g : w[0] === "#" ? E(w) : (w.indexOf("rgb") === -1 && (w = R(w)), w.indexOf("rgb") === 0 ? W(w) : g);
    }, C = (w) => {
      const { offsetX: E, offsetY: R, height: W, width: B } = w, S = R <= W / 2, k = E <= B / 2, F = (J, P) => Math.sqrt(J ** 2 + P ** 2), q = R === W / 2 && E === B / 2, Y = {
        first: S === true && k === false,
        second: S === true && k === true,
        third: S === false && k === true,
        fourth: S === false && k === false
      }, _ = {
        topLeft: F(E, R),
        topRight: F(B - E, R),
        bottomLeft: F(E, W - R),
        bottomRight: F(B - E, W - R)
      };
      let j = 0;
      return q || Y.fourth ? j = _.topLeft : Y.third ? j = _.topRight : Y.second ? j = _.bottomRight : Y.first && (j = _.bottomLeft), j * 2;
    }, X = (w) => {
      var j;
      const E = (j = d.current) == null ? void 0 : j.getBoundingClientRect(), R = w.clientX - E.left, W = w.clientY - E.top, B = E.height, S = E.width, k = {
        offsetX: r ? B / 2 : R,
        offsetY: r ? S / 2 : W,
        height: B,
        width: S
      }, F = {
        delay: s && s * 0.5,
        duration: s && s - s * 0.5
      }, q = C(k), Y = a || q / 2, _ = {
        left: r ? `${S / 2 - Y}px` : `${R - Y}px`,
        top: r ? `${B / 2 - Y}px` : `${W - Y}px`,
        height: a ? `${a * 2}px` : `${q}px`,
        width: a ? `${a * 2}px` : `${q}px`,
        transitionDelay: `0s, ${F.delay}ms`,
        transitionDuration: `${s}ms, ${F.duration}ms`
      };
      return D ? _ : { ..._, backgroundImage: `${M()}` };
    }, O = (w) => {
      const E = X(w), R = v.concat(E);
      y(R), l && l(w);
    };
    return (0, import_react.useEffect)(() => {
      const w = setTimeout(() => {
        v.length > 0 && y(v.splice(1, v.length - 1));
      }, s);
      return () => {
        clearTimeout(w);
      };
    }, [s, v]), (0, import_jsx_runtime.jsxs)(t, { className: x, onMouseDown: (w) => O(w), ref: d, ...u, children: [
      o,
      v.map((w, E) => (0, import_jsx_runtime.jsx)(Pe, { style: w }, E))
    ] });
  }
);
be.defaultProps = { rippleTag: "div", rippleDuration: 500, rippleRadius: 0, rippleColor: "dark" };
var ae = import_react.default.forwardRef(
  ({
    className: e,
    color: t,
    outline: r,
    children: s,
    rounded: n,
    disabled: a,
    floating: c,
    size: o,
    href: l,
    block: u,
    active: f,
    toggle: p,
    noRipple: d,
    tag: b,
    ...g
  }, h) => {
    const [v, y] = (0, import_react.useState)(f || false);
    let D;
    const $ = t && ["light", "link"].includes(t) || r ? "dark" : "light";
    t !== "none" ? r ? t ? D = `btn-outline-${t}` : D = "btn-outline-primary" : t ? D = `btn-${t}` : D = "btn-primary" : D = "";
    const x = clsx_m_default(
      t !== "none" && "btn",
      D,
      n && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(l || b !== "button") && a ? "disabled" : ""}`,
      u && "btn-block",
      v && "active",
      e
    );
    return l && b !== "a" && (b = "a"), ["hr", "img", "input"].includes(b) || d ? (0, import_jsx_runtime.jsx)(
      b,
      {
        className: x,
        onClick: p ? () => {
          y(!v);
        } : void 0,
        disabled: a && b === "button" ? true : void 0,
        href: l,
        ref: h,
        ...g,
        children: s
      }
    ) : (0, import_jsx_runtime.jsx)(
      be,
      {
        rippleTag: b,
        rippleColor: $,
        className: x,
        onClick: p ? () => {
          y(!v);
        } : void 0,
        disabled: a && b === "button" ? true : void 0,
        href: l,
        ref: h,
        ...g,
        children: s
      }
    );
  }
);
ae.defaultProps = { tag: "button", role: "button", color: "primary" };
var xe = import_react.default.forwardRef(
  ({ className: e, children: t, shadow: r, toolbar: s, size: n, vertical: a, tag: c, ...o }, l) => {
    let u;
    s ? u = "btn-toolbar" : a ? u = "btn-group-vertical" : u = "btn-group";
    const f = clsx_m_default(u, r && `shadow-${r}`, n && `btn-group-${n}`, e);
    return (0, import_jsx_runtime.jsx)(c, { className: f, ref: l, ...o, children: t });
  }
);
xe.defaultProps = { tag: "div", role: "group" };
var Le = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, color: s, grow: n, size: a, ...c }, o) => {
    const l = clsx_m_default(
      `${n ? "spinner-grow" : "spinner-border"}`,
      s && `text-${s}`,
      `${a ? n ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(r, { className: l, ref: o, ...c, children: t });
  }
);
Le.defaultProps = { tag: "div" };
var ke = import_react.default.forwardRef(
  ({ className: e, children: t, border: r, background: s, tag: n, shadow: a, alignment: c, ...o }, l) => {
    const u = clsx_m_default(
      "card",
      r && `border border-${r}`,
      s && `bg-${s}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(n, { className: u, ref: l, ...o, children: t });
  }
);
ke.defaultProps = { tag: "div" };
var Oe = import_react.default.forwardRef(
  ({ className: e, children: t, border: r, background: s, tag: n, ...a }, c) => {
    const o = clsx_m_default("card-header", r && `border-${r}`, s && `bg-${s}`, e);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: t });
  }
);
Oe.defaultProps = { tag: "div" };
var Ae = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-subtitle", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
Ae.defaultProps = { tag: "p" };
var Se = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-title", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
Se.defaultProps = { tag: "h5" };
var Fe = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-text", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
Fe.defaultProps = { tag: "p" };
var We = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-body", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
We.defaultProps = { tag: "div" };
var Xe = import_react.default.forwardRef(
  ({ className: e, children: t, border: r, background: s, tag: n, ...a }, c) => {
    const o = clsx_m_default("card-footer", r && `border-${r}`, s && `bg-${s}`, e);
    return (0, import_jsx_runtime.jsx)(n, { className: o, ...a, ref: c, children: t });
  }
);
Xe.defaultProps = { tag: "div" };
var Qt = ({ className: e, children: t, overlay: r, position: s, fluid: n, ...a }) => {
  const c = clsx_m_default(s && `card-img-${s}`, n && "img-fluid", r && "card-img", e);
  return (0, import_jsx_runtime.jsx)("img", { className: c, ...a, children: t });
};
var _e = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-img-overlay", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
_e.defaultProps = { tag: "div" };
var Zt = ({ className: e, children: t, ...r }) => {
  const s = clsx_m_default("card-link", e);
  return (0, import_jsx_runtime.jsx)("a", { className: s, ...r, children: t });
};
var je = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("card-group", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
je.defaultProps = { tag: "div" };
var Ye = import_react.default.forwardRef(
  ({ className: e, tag: t, horizontal: r, horizontalSize: s, light: n, numbered: a, children: c, small: o, ...l }, u) => {
    const f = clsx_m_default(
      "list-group",
      r && (s ? `list-group-horizontal-${s}` : "list-group-horizontal"),
      n && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: f, ref: u, ...l, children: c });
  }
);
Ye.defaultProps = { tag: "ul" };
var Ve = import_react.default.forwardRef(
  ({ className: e, tag: t, active: r, disabled: s, action: n, color: a, children: c, noBorders: o, ...l }, u) => {
    const f = t === "button", p = clsx_m_default(
      "list-group-item",
      r && "active",
      s && !f && "disabled",
      n && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: p, disabled: f && s, ref: u, ...l, children: c });
  }
);
Ve.defaultProps = { tag: "li" };
var qe = ({
  className: e,
  children: t,
  disableMouseDown: r,
  tag: s,
  tooltipTag: n,
  options: a,
  placement: c,
  title: o,
  wrapperProps: l,
  wrapperClass: u,
  onShow: f,
  onHide: p,
  onMouseEnter: d,
  onMouseLeave: b,
  ...g
}) => {
  const [h, v] = (0, import_react.useState)(null), [y, D] = (0, import_react.useState)(null), [$, x] = (0, import_react.useState)(false), [M, A] = (0, import_react.useState)(false), [C, X] = (0, import_react.useState)(false), [O, w] = (0, import_react.useState)(false), E = clsx_m_default("tooltip", C && "show", "fade", `bs-tooltip-${c}`, e), { styles: R, attributes: W } = usePopper(h, y, {
    placement: c,
    ...a
  });
  (0, import_react.useEffect)(() => {
    let F, q;
    return $ || M ? (w(true), F = setTimeout(() => {
      X(true);
    }, 4)) : (X(false), q = setTimeout(() => {
      w(false);
    }, 300)), () => {
      clearTimeout(F), clearTimeout(q);
    };
  }, [$, M]);
  const B = (F) => {
    x(true), f == null || f(), d && d(F);
  }, S = (F) => {
    x(false), p == null || p(), b && b(F);
  }, k = (0, import_react.useCallback)(
    (F) => {
      F.target === h ? A(true) : A(false);
    },
    [h]
  );
  return (0, import_react.useEffect)(() => {
    if (!r)
      return document.addEventListener("mousedown", k), () => {
        document.removeEventListener("mousedown", k);
      };
  }, [k, r]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      s,
      {
        className: u,
        onMouseEnter: B,
        onMouseLeave: S,
        ref: v,
        ...l,
        children: t
      }
    ),
    O && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        n,
        {
          ref: D,
          className: E,
          style: R.popper,
          ...W.popper,
          role: "tooltip",
          ...g,
          children: (0, import_jsx_runtime.jsx)("div", { className: "tooltip-inner", children: o })
        }
      ),
      document.body
    )
  ] });
};
qe.defaultProps = { tag: ae, tooltipTag: "div", placement: "top" };
var Ge = import_react.default.forwardRef(
  ({ around: e, between: t, bottom: r, center: s, children: n, className: a, evenly: c, end: o, middle: l, start: u, tag: f, top: p, ...d }, b) => {
    const g = clsx_m_default(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      r && "align-self-end",
      s && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      l && "align-self-center",
      u && "justify-content-start",
      p && "align-self-start",
      a
    );
    return (0, import_jsx_runtime.jsx)(f, { className: g, ...d, ref: b, children: n });
  }
);
Ge.defaultProps = { tag: "div" };
var zt = ({
  animate: e,
  className: t,
  icon: r,
  fab: s,
  fas: n,
  fal: a,
  far: c,
  flag: o,
  spin: l,
  fixed: u,
  flip: f,
  list: p,
  size: d,
  pull: b,
  pulse: g,
  color: h,
  border: v,
  rotate: y,
  inverse: D,
  stack: $,
  iconType: x,
  children: M,
  ...A
}) => {
  let C;
  o ? C = "flag" : s ? C = "fab" : n ? C = "fas" : c ? C = "far" : a ? C = "fal" : C = "fa";
  const X = clsx_m_default(
    x ? `fa-${x}` : C,
    e && `fa-${e}`,
    o ? `flag-${o}` : r && `fa-${r}`,
    d && `fa-${d}`,
    h && `text-${h}`,
    v && "fa-border",
    y && `fa-rotate-${y}`,
    b && `fa-pull-${b}`,
    l && !e && "fa-spin",
    p && "fa-li",
    u && "fa-fw",
    g && !e && "fa-pulse",
    D && "fa-inverse",
    f && `fa-flip-${f}`,
    $ && `fa-stack-${$}`,
    t
  );
  return (0, import_jsx_runtime.jsx)("i", { className: X, ...A, children: M });
};
var Ke = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, variant: s, color: n, blockquote: a, note: c, noteColor: o, listUnStyled: l, listInLine: u, ...f }, p) => {
    const d = clsx_m_default(
      s && s,
      a && "blockquote",
      c && "note",
      n && `text-${n}`,
      o && `note-${o}`,
      l && "list-unstyled",
      u && "list-inline",
      e
    );
    return a && (r = "blockquote"), (l || u) && (r = "ul"), (0, import_jsx_runtime.jsx)(r, { className: d, ref: p, ...f, children: t });
  }
);
Ke.defaultProps = { tag: "p" };
var Ht = import_react.default.forwardRef(
  ({ className: e, color: t, uppercase: r, bold: s, children: n, ...a }, c) => {
    const o = clsx_m_default(
      "breadcrumb",
      s && "font-weight-bold",
      t && `text-${t}`,
      r && "text-uppercase",
      e
    );
    return (0, import_jsx_runtime.jsx)("nav", { "aria-label": "breadcrumb", children: (0, import_jsx_runtime.jsx)("ol", { className: o, ref: c, ...a, children: n }) });
  }
);
var Ue = import_react.default.forwardRef(
  ({ className: e, active: t, current: r, children: s, ...n }, a) => {
    const c = clsx_m_default("breadcrumb-item", t && "active", e);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ref: a, "aria-current": t && r, ...n, children: s });
  }
);
Ue.defaultProps = {
  current: "page"
};
var Je = (e) => {
  if (e !== false)
    return `navbar-expand-${e}`;
};
var Qe = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    light: r,
    dark: s,
    scrolling: n,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: l,
    transparent: u,
    expand: f,
    tag: p,
    bgColor: d,
    ...b
  }, g) => {
    const [h, v] = (0, import_react.useState)(false), y = clsx_m_default(
      {
        "navbar-light": r,
        "navbar-dark": s,
        "scrolling-navbar": n || o,
        "top-nav-collapse": h,
        [`text-${l}`]: l && u ? h : l
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      f && Je(f),
      d && `bg-${d}`,
      e
    ), D = (0, import_react.useCallback)(() => {
      o && window.pageYOffset > o ? v(true) : v(false);
    }, [o]);
    return (0, import_react.useEffect)(() => ((n || o) && window.addEventListener("scroll", D), () => {
      window.removeEventListener("scroll", D);
    }), [D, n, o]), (0, import_jsx_runtime.jsx)(p, { className: y, role: "navigation", ...b, ref: g, children: t });
  }
);
Qe.defaultProps = {
  tag: "nav"
};
var Ze = import_react.default.forwardRef(
  ({ children: e, className: t, disabled: r, active: s, tag: n, ...a }, c) => {
    const o = clsx_m_default("nav-link", r ? "disabled" : s ? "active" : "", t);
    return (0, import_jsx_runtime.jsx)(n, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
);
Ze.defaultProps = {
  tag: "a",
  active: false,
  className: "",
  disabled: false
};
var ze = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("navbar-brand", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ref: n, ...s, children: t });
  }
);
ze.defaultProps = {
  tag: "a"
};
var He = import_react.default.forwardRef(
  ({ children: e, className: t, active: r, text: s, tag: n, ...a }, c) => {
    const o = clsx_m_default("nav-item", r && "active", s && "navbar-text", t);
    return (0, import_jsx_runtime.jsx)(n, { ...a, className: o, ref: c, children: e });
  }
);
He.defaultProps = {
  tag: "li"
};
var et = import_react.default.forwardRef(
  ({ children: e, className: t, right: r, fullWidth: s, left: n, tag: a, ...c }, o) => {
    const l = clsx_m_default("navbar-nav", s && "w-100", r && "ms-auto", n && "me-auto", t);
    return (0, import_jsx_runtime.jsx)(a, { className: l, ref: o, ...c, children: e });
  }
);
et.defaultProps = {
  tag: "ul",
  fullWidth: true
};
var tt = import_react.default.forwardRef(
  ({ children: e, className: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("navbar-toggler", t);
    return (0, import_jsx_runtime.jsx)(r, { ...s, className: a, ref: n, children: e });
  }
);
tt.defaultProps = {
  tag: "button"
};
var es = import_react.default.forwardRef(
  ({ children: e, bgColor: t, color: r, className: s, ...n }, a) => {
    const c = clsx_m_default(t && `bg-${t}`, r && `text-${r}`, s);
    return (0, import_jsx_runtime.jsx)("footer", { className: c, ...n, ref: a, children: e });
  }
);
var ts = import_react.default.forwardRef(
  ({ children: e, size: t, circle: r, center: s, end: n, start: a, className: c, ...o }, l) => {
    const u = clsx_m_default(
      "pagination",
      s && "justify-content-center",
      r && "pagination-circle",
      n && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: u, ...o, ref: l, children: e });
  }
);
var st = import_react.default.forwardRef(
  ({ children: e, className: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("page-link", t);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: e });
  }
);
st.defaultProps = {
  tag: "a"
};
var ss = import_react.default.forwardRef(
  ({ children: e, className: t, active: r, disabled: s, ...n }, a) => {
    const c = clsx_m_default("page-item", r && "active", s && "disabled", t);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ...n, ref: a, children: e });
  }
);
var rs = ({
  className: e,
  classNameResponsive: t,
  responsive: r,
  align: s,
  borderColor: n,
  bordered: a,
  borderless: c,
  children: o,
  color: l,
  hover: u,
  small: f,
  striped: p,
  ...d
}) => {
  const b = clsx_m_default(
    "table",
    s && `align-${s}`,
    n && `border-${n}`,
    a && "table-bordered",
    c && "table-borderless",
    l && `table-${l}`,
    u && "table-hover",
    f && "table-sm",
    p && "table-striped",
    e
  ), g = (0, import_react.useMemo)(() => (0, import_jsx_runtime.jsx)("table", { className: b, ...d, children: o }), [o, b, d]);
  if (r) {
    const h = clsx_m_default(
      typeof r == "string" ? `table-responsive-${r}` : "table-responsive",
      t
    );
    return (0, import_jsx_runtime.jsx)("div", { className: h, children: g });
  } else
    return g;
};
var ns = ({ className: e, children: t, dark: r, light: s, ...n }) => {
  const a = clsx_m_default(r && "table-dark", s && "table-light", e);
  return (0, import_jsx_runtime.jsx)("thead", { className: a, ...n, children: t });
};
var as = ({ className: e, children: t, ...r }) => {
  const s = clsx_m_default(e);
  return (0, import_jsx_runtime.jsx)("tbody", { className: s, ...r, children: t });
};
var he = import_react.default.forwardRef(
  ({ animated: e, children: t, className: r, style: s, tag: n, valuenow: a, valuemax: c, striped: o, bgColor: l, valuemin: u, width: f, ...p }, d) => {
    const b = clsx_m_default(
      "progress-bar",
      l && `bg-${l}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      r
    ), g = { width: `${f}%`, ...s };
    return (0, import_jsx_runtime.jsx)(
      n,
      {
        className: b,
        style: g,
        ref: d,
        role: "progressbar",
        ...p,
        "aria-valuenow": Number(f) ?? a,
        "aria-valuemin": Number(u),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
);
he.defaultProps = { tag: "div" };
var rt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, height: s, style: n, ...a }, c) => {
    const o = clsx_m_default("progress", e), l = { height: `${s}px`, ...n };
    return (0, import_jsx_runtime.jsx)(r, { className: o, ref: c, style: l, ...a, children: import_react.default.Children.map(t, (u) => {
      if (!import_react.default.isValidElement(u) || u.type !== he) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return u;
    }) });
  }
);
rt.defaultProps = { tag: "div" };
var nt = import_react.default.forwardRef(
  ({
    className: e,
    size: t,
    contrast: r,
    value: s,
    defaultValue: n,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: l,
    wrapperTag: u,
    label: f,
    onChange: p,
    children: d,
    labelRef: b,
    labelStyle: g,
    type: h,
    onBlur: v,
    readonly: y,
    ...D
  }, $) => {
    var Y, _;
    const [x, M] = (0, import_react.useState)(s || n), [A, C] = (0, import_react.useState)(0), [X, O] = (0, import_react.useState)(false), w = (0, import_react.useRef)(null);
    (0, import_react.useImperativeHandle)($, () => w.current);
    const E = (0, import_react.useRef)(null), R = b || E, W = clsx_m_default("form-outline", r && "form-white", o), B = clsx_m_default(
      "form-control",
      X && "active",
      h === "date" && "active",
      t && `form-control-${t}`,
      e
    ), S = clsx_m_default("form-label", c);
    (0, import_react.useEffect)(() => {
      if (!w.current)
        return;
      const { value: j } = w.current;
      j.length > 0 ? O(true) : O(false);
    }, [(Y = w.current) == null ? void 0 : Y.value]), (0, import_react.useEffect)(() => {
      s !== void 0 && (s.toString().length > 0 ? O(true) : O(false));
    }, [s]), (0, import_react.useEffect)(() => {
      n !== void 0 && (n.toString().length > 0 ? O(true) : O(false));
    }, [n]);
    const k = (0, import_react.useCallback)(() => {
      var j;
      (j = R.current) != null && j.clientWidth && C(R.current.clientWidth * 0.8 + 8);
    }, [R]);
    (0, import_react.useEffect)(() => {
      k();
    }, [(_ = R.current) == null ? void 0 : _.clientWidth, k]);
    const F = (j) => {
      M(j.target.value), p == null || p(j);
    }, q = (0, import_react.useCallback)(
      (j) => {
        w.current && (x !== void 0 && x.toString().length > 0 || s !== void 0 && s.toString().length > 0 || w.current.value.length > 0 ? O(true) : O(false), v && v(j));
      },
      [x, s, v]
    );
    return (0, import_jsx_runtime.jsxs)(u, { className: W, style: l, children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: h,
          readOnly: y,
          className: B,
          onBlur: q,
          onChange: F,
          onFocus: k,
          value: s,
          defaultValue: n,
          id: a,
          ref: w,
          ...D
        }
      ),
      f && (0, import_jsx_runtime.jsx)("label", { className: S, style: g, htmlFor: a, ref: R, children: f }),
      (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: A } }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
      ] }),
      d
    ] });
  }
);
nt.defaultProps = { wrapperTag: "div", readonly: false };
var oe = ({
  className: e,
  inputRef: t,
  labelClass: r,
  wrapperClass: s,
  labelStyle: n,
  wrapperTag: a,
  wrapperStyle: c,
  label: o,
  inline: l,
  btn: u,
  id: f,
  btnColor: p,
  disableWrapper: d,
  toggleSwitch: b,
  ...g
}) => {
  let h = "form-check-input", v = "form-check-label";
  u && (h = "btn-check", p ? v = `btn btn-${p}` : v = "btn btn-primary");
  const y = clsx_m_default(
    o && !u && "form-check",
    l && !u && "form-check-inline",
    b && "form-switch",
    s
  ), D = clsx_m_default(h, e), $ = clsx_m_default(v, r), x = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)("input", { className: D, id: f, ref: t, ...g }),
    o && (0, import_jsx_runtime.jsx)("label", { className: $, style: n, htmlFor: f, children: o })
  ] });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: d ? x : (0, import_jsx_runtime.jsx)(a, { style: c, className: y, children: x }) });
};
oe.defaultProps = { wrapperTag: "div" };
var os = ({ ...e }) => (0, import_jsx_runtime.jsx)(oe, { type: "checkbox", ...e });
var cs = ({ ...e }) => (0, import_jsx_runtime.jsx)(oe, { type: "radio", ...e });
var ve = ({
  className: e,
  children: t,
  show: r,
  id: s,
  navbar: n,
  tag: a,
  collapseRef: c,
  style: o,
  ...l
}) => {
  const [u, f] = (0, import_react.useState)(false), [p, d] = (0, import_react.useState)(void 0), [b, g] = (0, import_react.useState)(false), h = clsx_m_default(
    b ? "collapsing" : "collapse",
    !b && u && "show",
    n && "navbar-collapse",
    e
  ), v = (0, import_react.useRef)(null), y = c ?? v, D = (0, import_react.useCallback)(() => {
    u && d(void 0);
  }, [u]);
  return (0, import_react.useEffect)(() => {
    var $;
    p === void 0 && u && d(($ = y == null ? void 0 : y.current) == null ? void 0 : $.scrollHeight);
  }, [p, u, y]), (0, import_react.useEffect)(() => {
    f(r), u && g(true);
    const $ = setTimeout(() => {
      g(false);
    }, 350);
    return () => {
      clearTimeout($);
    };
  }, [r, u]), (0, import_react.useEffect)(() => {
    var $;
    d(u ? ($ = y == null ? void 0 : y.current) == null ? void 0 : $.scrollHeight : 0);
  }, [u, y]), (0, import_react.useEffect)(() => (window.addEventListener("resize", D), () => {
    window.removeEventListener("resize", D);
  }), [D]), (0, import_jsx_runtime.jsx)(a, { style: { height: p, ...o }, id: s, className: h, ...l, ref: y, children: t });
};
ve.defaultProps = { tag: "div" };
var ye = (0, import_react.createContext)(null);
var at = ({
  children: e,
  isOpen: t = false,
  options: r,
  animation: s = true,
  dropup: n,
  dropright: a,
  dropleft: c,
  onHide: o,
  onShow: l
}) => {
  const [u, f] = (0, import_react.useState)(t), [p, d] = (0, import_react.useState)(null), [b, g] = (0, import_react.useState)(null), [h, v] = (0, import_react.useState)(-1);
  return (0, import_jsx_runtime.jsx)(
    ye.Provider,
    {
      value: {
        animation: s,
        activeIndex: h,
        isOpenState: u,
        setReferenceElement: d,
        setPopperElement: g,
        setActiveIndex: v,
        popperElement: b,
        setIsOpenState: f,
        referenceElement: p,
        onHide: o,
        onShow: l,
        dropup: n,
        options: r,
        dropright: a,
        dropleft: c
      },
      children: e
    }
  );
};
var ot = (e) => e instanceof HTMLElement;
var ct = (e) => e instanceof Node;
var te = () => {
  const e = (0, import_react.useContext)(ye);
  if (!e)
    throw new Error("Missing context data");
  return e;
};
var lt = () => {
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: r, popperElement: s, referenceElement: n, onHide: a } = te(), c = (0, import_react.useCallback)(
    ({ target: o }) => {
      !e || !ct(o) || s && s.contains(o) || n && n.contains(o) || (t(false), a == null || a(), setTimeout(() => r(-1), 300));
    },
    [e, t, r, s, n, a]
  );
  (0, import_react.useEffect)(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
};
var it = ({
  className: e,
  tag: t = "div",
  group: r,
  children: s,
  dropup: n,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  lt();
  const l = clsx_m_default(
    r ? "btn-group" : "dropdown",
    n && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return (0, import_jsx_runtime.jsx)(t, { className: l, ...o, children: s });
};
var ls = ({ animation: e, onHide: t, onShow: r, ...s }) => (0, import_jsx_runtime.jsx)(at, { animation: e, onHide: t, onShow: r, ...s, children: (0, import_jsx_runtime.jsx)(it, { ...s }) });
var ut = ({
  childTag: e,
  children: t,
  disabled: r,
  link: s,
  divider: n,
  header: a,
  href: c = "#"
}) => {
  const o = clsx_m_default("dropdown-item", r && "disabled");
  return s ? e ? (0, import_jsx_runtime.jsx)(e, { className: o, children: t }) : (0, import_jsx_runtime.jsx)("a", { href: c, className: o, children: t }) : n ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-divider", children: t }) : (0, import_jsx_runtime.jsx)("hr", { className: "dropdown-divider" }) : a ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)("h6", { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t });
};
var is = ({
  onClick: e,
  tag: t = "li",
  childTag: r,
  children: s,
  style: n,
  link: a,
  divider: c,
  header: o,
  disabled: l,
  href: u,
  preventCloseOnClick: f,
  ...p
}) => {
  const { setIsOpenState: d, onHide: b } = te();
  return (0, import_jsx_runtime.jsx)(t, { style: n, onClick: (h) => {
    l || f || (b == null || b(), d(false), e == null || e(h));
  }, ...p, children: (0, import_jsx_runtime.jsx)(
    ut,
    {
      link: a,
      divider: c,
      header: o,
      disabled: l,
      href: u,
      childTag: r,
      children: s
    }
  ) });
};
var fe = (e, t, r) => r === "up" ? e <= 0 ? t[t.length - 1].props.divider === true || t[t.length - 1].props.disabled === true : t[e - 1].props.divider === true || t[e - 1].props.disabled === true : e === t.length - 1 ? t[0].props.divider === true || t[0].props.disabled === true : t[e + 1].props.divider === true || t[e + 1].props.disabled === true;
var dt = (e) => {
  const { activeIndex: t, isOpenState: r, setIsOpenState: s, setActiveIndex: n, onHide: a } = te(), c = (0, import_react.useCallback)(
    (o) => {
      if (Array.isArray(e)) {
        if (ot(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const l = fe(t, e, "up");
          if (t === 1) {
            n(l ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            n(l ? e.length - 2 : e.length - 1);
            return;
          }
          n((u) => l ? u - 2 : u - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const l = fe(t, e, "down");
          if (t === e.length - 2) {
            n((u) => l ? 0 : u + 1);
            return;
          }
          if (t === e.length - 1) {
            n(l ? 1 : 0);
            return;
          }
          n((u) => l ? u + 2 : u + 1);
        }
        if (o.key === "Enter") {
          const l = document.querySelector('[data-active="true"]'), u = l == null ? void 0 : l.firstElementChild;
          u == null || u.click(), s(false), setTimeout(() => n(-1), 300);
        }
        o.key === "Escape" && (s(false), a == null || a(), setTimeout(() => n(-1), 300));
      }
    },
    [e, s, n, t, a]
  );
  (0, import_react.useEffect)(() => (r && document.addEventListener("keydown", c), () => {
    r && document.removeEventListener("keydown", c);
  }), [r, c]), (0, import_react.useEffect)(() => {
    const o = document.querySelector('[data-active="true"]'), l = o == null ? void 0 : o.firstElementChild;
    return l == null || l.focus(), () => l == null ? void 0 : l.blur();
  }, [t]);
};
var ft = () => {
  const { isOpenState: e } = te(), [t, r] = (0, import_react.useState)(false), [s, n] = (0, import_react.useState)(false), [a, c] = (0, import_react.useState)(e);
  return (0, import_react.useEffect)(() => {
    let o;
    return e || (n(true), r(false), o = setTimeout(() => {
      n(false), c(false);
    }, 300)), e && (r(true), n(false), c(true), o = setTimeout(() => {
      r(false);
    }, 300)), () => clearTimeout(o);
  }, [e]), { show: a, isFadeIn: t, isFadeOut: s };
};
var us = ({
  className: e,
  tag: t = "ul",
  children: r,
  style: s,
  dark: n,
  responsive: a = "",
  appendToBody: c = false,
  alwaysOpen: o,
  ...l
}) => {
  const {
    activeIndex: u,
    setPopperElement: f,
    isOpenState: p,
    animation: d,
    referenceElement: b,
    popperElement: g,
    options: h,
    dropleft: v,
    dropup: y,
    dropright: D
  } = te(), { show: $, isFadeIn: x, isFadeOut: M } = ft();
  dt(r);
  const A = () => {
    if (D)
      return "right-start";
    if (v)
      return "left-start";
    const w = g && getComputedStyle(g).getPropertyValue("--bs-position").trim() === "end";
    return y ? w ? "top-end" : "top-start" : w ? "bottom-end" : "bottom-start";
  }, { styles: C } = usePopper(b, g, {
    placement: A(),
    modifiers: [flip_default2],
    ...h
  }), X = clsx_m_default(
    "dropdown-menu",
    n && "dropdown-menu-dark",
    p && "show",
    d && "animation",
    x && "fade-in",
    M && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!$ && !o)
    return null;
  const O = (0, import_jsx_runtime.jsx)(
    t,
    {
      className: X,
      style: { position: "absolute", zIndex: 1e3, ...C.popper, ...s },
      ref: f,
      ...l,
      children: import_react.Children.map(
        r,
        (w, E) => (0, import_react.cloneElement)(w, {
          tabIndex: 1,
          "data-active": u === E && true,
          className: clsx_m_default(u === E ? "active" : "", w.props.className)
        })
      )
    }
  );
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: c ? (0, import_react_dom.createPortal)(O, document.body) : O });
};
var ds = ({
  className: e,
  tag: t = ae,
  children: r,
  onClick: s,
  split: n,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: l, setActiveIndex: u, onHide: f, onShow: p } = te(), d = clsx_m_default("dropdown-toggle", n && "dropdown-toggle-split", e);
  return (0, import_jsx_runtime.jsx)(
    t,
    {
      onClick: (g) => {
        l ? f == null || f() : p == null || p(), c((h) => !h), s == null || s(g), setTimeout(() => u(-1), 300);
      },
      ref: o,
      className: d,
      "aria-expanded": !!l,
      ...a,
      children: r
    }
  );
};
var mt = ({
  className: e,
  btnClassName: t,
  btnChildren: r,
  children: s,
  tag: n,
  onShow: a,
  onHide: c,
  popperTag: o,
  isOpen: l,
  placement: u,
  dismiss: f,
  options: p,
  poperStyle: d,
  onClick: b,
  ...g
}) => {
  const [h, v] = (0, import_react.useState)(), [y, D] = (0, import_react.useState)(), { styles: $, attributes: x } = usePopper(h, y, { placement: u, ...p }), [M, A] = (0, import_react.useState)(l ?? false), [C, X] = (0, import_react.useState)(false), [O, w] = (0, import_react.useState)(false), E = clsx_m_default(
    "popover fade",
    C && M && "show",
    `bs-popover-${u === "left" ? "start" : u === "right" ? "end" : u}`,
    e
  ), R = (B) => {
    M && !f ? c == null || c() : M || a == null || a(), f ? (w(true), A(true)) : A(!M), b && b(B);
  };
  (0, import_react.useEffect)(() => {
    l || A(false);
  }, [l]);
  const W = (0, import_react.useCallback)(
    (B) => {
      O && y && y !== null && M && h && h !== null && (h.contains(B.target) || (A(false), c == null || c()));
    },
    [O, M, y, h, c]
  );
  return (0, import_react.useEffect)(() => {
    const B = setTimeout(() => {
      X(M);
    }, 150);
    return () => {
      clearTimeout(B);
    };
  }, [M]), (0, import_react.useEffect)(() => (M && document.addEventListener("mousedown", W), () => {
    document.removeEventListener("mousedown", W);
  }), [W, M]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(n, { onClick: R, className: t, ...g, ref: v, children: r }),
    (C || M) && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        o,
        {
          className: E,
          ref: D,
          style: { ...$.popper, ...d },
          ...x.popper,
          children: s
        }
      ),
      document.body
    )
  ] });
};
mt.defaultProps = {
  tag: ae,
  popperTag: "div",
  placement: "bottom"
};
var pt = ({ className: e, children: t, tag: r, ...s }) => {
  const n = clsx_m_default("popover-body", e);
  return (0, import_jsx_runtime.jsx)(r, { className: n, ...s, children: t });
};
pt.defaultProps = {
  tag: "div"
};
var gt = ({ className: e, children: t, tag: r, ...s }) => {
  const n = clsx_m_default("popover-header", e);
  return (0, import_jsx_runtime.jsx)(r, { className: n, ...s, children: t });
};
gt.defaultProps = {
  tag: "h3"
};
var fs = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: r = true,
  children: s,
  className: n,
  closeOnEsc: a = true,
  setShow: c,
  leaveHiddenModal: o = true,
  modalRef: l,
  onHide: u,
  onHidePrevented: f,
  onShow: p,
  show: d,
  staticBackdrop: b,
  nonInvasive: g = false,
  tag: h = "div",
  ...v
}) => {
  const [y, D] = (0, import_react.useState)(d), [$, x] = (0, import_react.useState)(d), [M, A] = (0, import_react.useState)(d), [C, X] = (0, import_react.useState)(false), [O, w] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)([]), W = (0, import_react.useRef)(null), B = l || W, S = clsx_m_default(
    "modal",
    C && "modal-static",
    e,
    "fade",
    $ && "show",
    y && g && "modal-non-invasive-show",
    n
  ), k = clsx_m_default("modal-backdrop", "fade", y && "show"), F = (0, import_react.useCallback)(() => {
    x(false), $ && (u == null || u()), setTimeout(() => {
      D(false), c == null || c(false);
    }, 150), setTimeout(() => {
      A(false);
    }, 350);
  }, [u, c]), q = (0, import_react.useCallback)(
    (J) => {
      $ && J.target === B.current && (b ? (X(true), f == null || f(), setTimeout(() => {
        X(false);
      }, 300)) : F());
    },
    [$, B, b, F, f]
  ), Y = (0, import_react.useCallback)(
    (J) => {
      $ && J.key === "Tab" && (J.preventDefault(), w(O + 1)), a && $ && J.key === "Escape" && (b ? (X(true), f == null || f(), setTimeout(() => {
        X(false);
      }, 300)) : F());
    },
    [$, a, O, b, F, f]
  );
  (0, import_react.useEffect)(() => {
    var L;
    const J = (L = B.current) == null ? void 0 : L.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), P = Array.from(J).filter((K) => K.tabIndex !== -1).sort((K, Z) => K.tabIndex === Z.tabIndex ? 0 : Z.tabIndex === null ? -1 : K.tabIndex === null ? 1 : K.tabIndex - Z.tabIndex);
    R(P), w(P.length - 1);
  }, [B]), (0, import_react.useEffect)(() => {
    E && E.length > 0 && (O === E.length ? (E[0].focus(), w(0)) : E[O].focus());
  }, [O, E]), (0, import_react.useEffect)(() => {
    const J = () => {
      const L = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - L);
    }, P = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (M && P && !g) {
      const L = J();
      document.body.classList.add("modal-open"), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${L}px`;
    } else
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    return () => {
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    };
  }, [M, g]), (0, import_react.useEffect)(() => {
    d ? (p == null || p(), A(true), setTimeout(() => {
      D(true);
    }, 0), setTimeout(() => {
      x(true), c == null || c(true);
    }, 150)) : F();
  }, [d, F, c, p]), (0, import_react.useEffect)(() => (g || (window.addEventListener("click", q), window.addEventListener("keydown", Y)), () => {
    window.removeEventListener("click", q), window.removeEventListener("keydown", Y);
  }), [Y, q, g]);
  const _ = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || d || M) && import_react_dom.default.createPortal(
    (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      (0, import_jsx_runtime.jsx)(
        h,
        {
          className: S,
          ref: B,
          style: { display: M || d ? "block" : "none", pointerEvents: g ? "none" : "initial" },
          ...v,
          children: s
        }
      ),
      import_react_dom.default.createPortal(
        r && M && !g && (0, import_jsx_runtime.jsx)("div", { className: k }),
        document.body
      )
    ] }),
    document.body
  ) }), j = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || d || M) && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      h,
      {
        className: S,
        ref: B,
        style: { display: M || d ? "block" : "none", pointerEvents: g ? "none" : "initial" },
        ...v,
        children: s
      }
    ),
    import_react_dom.default.createPortal(
      r && M && !g && (0, import_jsx_runtime.jsx)("div", { className: k }),
      document.body
    )
  ] }) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t ? _ : j });
};
var bt = import_react.default.forwardRef(
  ({ className: e, centered: t, children: r, size: s, scrollable: n, tag: a, ...c }, o) => {
    const l = clsx_m_default(
      "modal-dialog",
      n && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      s && `modal-${s}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: l, ...c, ref: o, children: r });
  }
);
bt.defaultProps = { tag: "div" };
var ht = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("modal-content", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
ht.defaultProps = { tag: "div" };
var vt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("modal-header", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
vt.defaultProps = { tag: "div" };
var yt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("modal-title", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
yt.defaultProps = { tag: "h5" };
var Nt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("modal-body", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
Nt.defaultProps = { tag: "div" };
var wt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: r, ...s }, n) => {
    const a = clsx_m_default("modal-footer", e);
    return (0, import_jsx_runtime.jsx)(r, { className: a, ...s, ref: n, children: t });
  }
);
wt.defaultProps = { tag: "div" };
var ie = import_react.default.createContext({
  activeElement: null,
  setTargets: null
});
var ms = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: r,
  offset: s = 10,
  ...n
}) => {
  const a = clsx_m_default("sticky-top", t), [c, o] = (0, import_react.useState)(null), [l, u] = (0, import_react.useState)([]), f = e instanceof Window, p = (0, import_react.useCallback)(() => {
    var y, D, $;
    if (!l.length)
      return;
    const d = f ? window.pageYOffset : (y = e == null ? void 0 : e.current) == null ? void 0 : y.scrollTop, b = Number(s), g = (D = l[l.length - 1]) == null ? void 0 : D.current, h = ($ = l[0]) == null ? void 0 : $.current;
    d + b < h.offsetTop && o(null), l.forEach((x, M) => {
      var O;
      const A = (O = l[M + 1]) == null ? void 0 : O.current, C = x.current;
      if (d > C.offsetTop - b && d < (A == null ? void 0 : A.offsetTop) - b) {
        o(C);
        return;
      }
    }), d > g.offsetTop - b && o(g);
  }, [s, l, f, e]);
  return (0, import_react.useEffect)(() => {
    const d = f ? e : e == null ? void 0 : e.current;
    return p(), d == null || d.addEventListener("scroll", p), () => {
      d == null || d.removeEventListener("scroll", p);
    };
  }, [p, e, f]), (0, import_jsx_runtime.jsx)("div", { className: a, ...n, children: (0, import_jsx_runtime.jsx)("ul", { className: "nav flex-column nav-pills menu-sidebar", children: (0, import_jsx_runtime.jsx)(ie.Provider, { value: { activeElement: c, setTargets: u }, children: r }) }) });
};
var Tt = ({
  className: e,
  collapsible: t,
  targetRef: r,
  children: s,
  subsections: n,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var h;
  const { activeElement: l, setTargets: u } = (0, import_react.useContext)(ie), f = () => n == null ? void 0 : n.some((v) => v.current.id === (l == null ? void 0 : l.id)), p = (l == null ? void 0 : l.id) === ((h = r.current) == null ? void 0 : h.id), d = p || f();
  p && (c == null || c(l == null ? void 0 : l.id));
  const b = clsx_m_default("nav-link", t && "collapsible-scrollspy", d && "active", e), g = (v) => {
    const y = r == null ? void 0 : r.current;
    y == null || y.scrollIntoView({ behavior: "smooth" }), a == null || a(v);
  };
  return (0, import_react.useEffect)(() => {
    u((v) => [...v, r]);
  }, [u, r]), (0, import_jsx_runtime.jsx)("li", { className: "nav-item", style: { cursor: "pointer" }, children: (0, import_jsx_runtime.jsx)("a", { className: b, onClick: g, ...o, children: s }) });
};
Tt.defaultProps = {};
var Bt = ({
  collapsible: e,
  className: t,
  children: r,
  style: s,
  ...n
}) => {
  const [a, c] = (0, import_react.useState)("0px"), { activeElement: o } = (0, import_react.useContext)(ie), l = clsx_m_default("nav flex-column", t), u = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const p = () => e == null ? void 0 : e.some((b) => b.current.id === (o == null ? void 0 : o.id)), d = u.current;
    p() ? c(`${d == null ? void 0 : d.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const f = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...s
  };
  return (0, import_jsx_runtime.jsx)("ul", { className: l, ref: u, style: e ? f : s, ...n, children: r });
};
Bt.defaultProps = {};
var ps = ({ ...e }) => (0, import_jsx_runtime.jsx)(oe, { type: "checkbox", toggleSwitch: true, ...e });
var Ne = ({ value: e, min: t, max: r, showThumb: s }) => {
  const n = Number(e), [a, c] = (0, import_react.useState)(
    (n || 0 - Number(t)) * 100 / (Number(r) - Number(t))
  ), o = clsx_m_default("thumb", s && "thumb-active");
  return (0, import_react.useEffect)(() => {
    c((Number(e) - Number(t)) * 100 / (Number(r) - Number(t)));
  }, [e, r, t]), (0, import_jsx_runtime.jsx)("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: (0, import_jsx_runtime.jsx)("span", { className: "thumb-value", children: e }) });
};
Ne.defaultProps = { min: "0", max: "100" };
var Mt = ({
  className: e,
  defaultValue: t,
  disableTooltip: r,
  labelId: s,
  max: n,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: l,
  onTouchEnd: u,
  onChange: f,
  labelClass: p,
  value: d,
  label: b,
  id: g,
  inputRef: h,
  ...v
}) => {
  const [y, D] = (0, import_react.useState)(t), [$, x] = (0, import_react.useState)(false), M = clsx_m_default("form-range", e), A = clsx_m_default("form-label", p);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    b && (0, import_jsx_runtime.jsx)("label", { className: A, id: s, htmlFor: g, children: b }),
    (0, import_jsx_runtime.jsxs)("div", { className: "range", children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "range",
          onMouseDown: (R) => {
            x(true), c && c(R);
          },
          onMouseUp: (R) => {
            x(false), o && o(R);
          },
          onTouchStart: (R) => {
            x(true), l && l(R);
          },
          onTouchEnd: (R) => {
            x(false), u && u(R);
          },
          onChange: (R) => {
            D(R.target.value), f && f(R);
          },
          className: M,
          value: d || y,
          id: g,
          min: a,
          max: n,
          ref: h,
          ...v
        }
      ),
      !r && (0, import_jsx_runtime.jsx)(Ne, { value: d || y, showThumb: $, min: a, max: n })
    ] })
  ] });
};
Mt.defaultProps = { defaultValue: 0 };
var gs = ({ className: e, labelClass: t, labelStyle: r, inputRef: s, size: n, label: a, id: c, ...o }) => {
  const l = clsx_m_default("form-control", `form-control-${n}`, e), u = clsx_m_default("form-label", t);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    a && (0, import_jsx_runtime.jsx)("label", { className: u, style: r, htmlFor: c, children: a }),
    (0, import_jsx_runtime.jsx)("input", { className: l, type: "file", id: c, ref: s, ...o })
  ] });
};
var Dt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: r,
    textBefore: s,
    textAfter: n,
    noWrap: a,
    tag: c,
    textTag: o,
    textClass: l,
    size: u,
    textProps: f,
    ...p
  }, d) => {
    const b = clsx_m_default("input-group", a && "flex-nowrap", u && `input-group-${u}`, e), g = clsx_m_default("input-group-text", r && "border-0", l), h = (v) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: v && Array.isArray(v) ? v.map((y, D) => (0, import_jsx_runtime.jsx)(o, { className: g, ...f, children: y }, D)) : (0, import_jsx_runtime.jsx)(o, { className: g, ...f, children: v }) });
    return (0, import_jsx_runtime.jsxs)(c, { className: b, ref: d, ...p, children: [
      s && h(s),
      t,
      n && h(n)
    ] });
  }
);
Dt.defaultProps = { tag: "div", textTag: "span" };
var Rt = import_react.default.forwardRef(
  ({ className: e, children: t, isValidated: r, onReset: s, onSubmit: n, ...a }, c) => {
    const [o, l] = (0, import_react.useState)(r), u = clsx_m_default("needs-validation", o && "was-validated", e);
    return (0, import_jsx_runtime.jsx)("form", { className: u, onSubmit: (d) => {
      d.preventDefault(), l(true), n && n(d);
    }, onReset: (d) => {
      d.preventDefault(), l(false), s && s(d);
    }, ref: c, ...a, children: t });
  }
);
Rt.defaultProps = {
  noValidate: true
};
var bs = import_react.default.forwardRef(
  ({ className: e, fill: t, pills: r, justify: s, children: n, ...a }, c) => {
    const o = clsx_m_default(
      "nav",
      r ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      s && "nav-justified",
      e
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: o, ref: c, ...a, children: n });
  }
);
var hs = import_react.default.forwardRef(
  ({ className: e, children: t, style: r, ...s }, n) => {
    const a = clsx_m_default("nav-item", e);
    return (0, import_jsx_runtime.jsx)("li", { className: a, style: { cursor: "pointer", ...r }, role: "presentation", ref: n, ...s, children: t });
  }
);
var vs = import_react.default.forwardRef(
  ({ className: e, color: t, active: r, onShow: s, onHide: n, children: a, ...c }, o) => {
    const l = clsx_m_default("nav-link", r && "active", t && `bg-${t}`, e);
    return (0, import_react.useEffect)(() => {
      r ? s == null || s() : n == null || n();
    }, [r]), (0, import_jsx_runtime.jsx)("a", { className: l, ref: o, ...c, children: a });
  }
);
var $t = import_react.default.forwardRef(
  ({ className: e, tag: t, children: r, ...s }, n) => {
    const a = clsx_m_default("tab-content", e);
    return (0, import_jsx_runtime.jsx)(t, { className: a, ref: n, ...s, children: r });
  }
);
$t.defaultProps = { tag: "div" };
var Et = import_react.default.forwardRef(
  ({ className: e, tag: t, show: r, children: s, ...n }, a) => {
    const [c, o] = (0, import_react.useState)(false), l = clsx_m_default("tab-pane", "fade", c && "show", r && "active", e);
    return (0, import_react.useEffect)(() => {
      let u;
      return r ? u = setTimeout(() => {
        o(true);
      }, 100) : o(false), () => {
        clearTimeout(u);
      };
    }, [r]), (0, import_jsx_runtime.jsx)(t, { className: l, role: "tabpanel", ref: a, ...n, children: s });
  }
);
Et.defaultProps = { tag: "div" };
var ue = (0, import_react.createContext)({
  active: 0
});
var Ct = ({ imagesCount: e, to: t }) => {
  const { active: r } = (0, import_react.useContext)(ue);
  return (0, import_jsx_runtime.jsx)("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((s, n) => (0, import_jsx_runtime.jsx)("li", { "data-mdb-target": n, className: clsx_m_default(r === n && "active"), onClick: () => t(n) }, n)) });
};
var Pt = ({ move: e }) => (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-prev", onClick: () => e("prev"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-prev-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Previous" })
  ] }),
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-next", onClick: () => e("next"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-next-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Next" })
  ] })
] });
var It = (e) => {
  const t = getComputedStyle(e), r = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && r.display !== "none" && t.visibility !== "hidden";
};
var xt = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item"));
var Lt = (e) => e.offsetHeight;
var kt = (e, t, r = true) => {
  if (!r) {
    me(e);
    return;
  }
  const s = Ot(t);
  t.addEventListener("transitionend", () => me(e), { once: true }), St(t, s);
};
var me = (e) => {
  typeof e == "function" && e();
};
var Ot = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), n = Number.parseFloat(r);
  return !s && !n ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * 1e3);
};
var At = (e) => {
  e.dispatchEvent(new Event("transitionend"));
};
var St = (e, t) => {
  let r = false;
  const n = t + 5;
  function a() {
    r = true, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    r || At(e);
  }, n);
};
var Ft = ({
  fade: e,
  className: t,
  dark: r,
  children: s,
  interval: n,
  keyboard: a,
  touch: c,
  showControls: o,
  showIndicators: l,
  onSlide: u,
  ...f
}) => {
  const p = (0, import_react.useRef)([]), d = (0, import_react.useRef)(null), b = (0, import_react.useRef)(0), g = (0, import_react.useRef)(false), [h, v] = (0, import_react.useState)(0), [y, D] = (0, import_react.useState)(0), [$, x] = (0, import_react.useState)({ initialX: 0, initialY: 0 }), [M, A] = (0, import_react.useState)(false), C = (0, import_react.useRef)(null), X = clsx_m_default("carousel", "slide", e && "carousel-fade", r && "carousel-dark", t), O = () => {
    d.current && (clearInterval(d.current), d.current = null);
  }, w = (0, import_react.useCallback)(
    (P, L) => {
      if (L !== void 0)
        b.current = L, v(L);
      else {
        const K = h === y - 1 ? 0 : h + 1, Z = h === 0 ? y - 1 : h - 1;
        b.current = P === "next" ? K : Z, v(P === "next" ? K : Z);
      }
    },
    [h, y]
  ), E = (0, import_react.useCallback)(
    (P, L, K) => {
      var de;
      A(true);
      const z = p.current[h], H = Boolean(d.current), re = P === "next", ne = re ? "carousel-item-start" : "carousel-item-end", ce = re ? "carousel-item-next" : "carousel-item-prev";
      if (L.classList.contains("active")) {
        g.current = false;
        return;
      }
      w(P, K), !(!z || !L) && (g.current = true, H && O(), (de = C.current) != null && de.classList.contains("slide") ? (L.classList.add(ce), Lt(L), z.classList.add(ne), L.classList.add(ne), kt(() => {
        A(false), L.classList.remove(ne, ce), L.classList.add("active"), z.classList.remove("active", ce, ne), g.current = false;
      }, z, true)) : (z.classList.remove("active"), L.classList.add("active"), g.current = false));
    },
    [C, h, w]
  ), R = (P) => {
    g.current || (g.current = true, setTimeout(() => {
      g.current = false;
    }, P));
  }, W = (0, import_react.useCallback)(
    (P) => {
      const L = P === "prev", z = (b.current + (L ? -1 : 1)) % y, H = p.current;
      return z === -1 ? H[y - 1] : H[z];
    },
    [y]
  ), B = (P) => {
    const L = b.current, K = P > L ? "next" : "prev", Z = p.current;
    return { direction: K, nextElement: Z[P] };
  }, S = (P) => {
    if (g.current || (R(700), P > y - 1 || P < 0))
      return;
    const { direction: L, nextElement: K } = B(P);
    E(L, K, P);
  }, k = (0, import_react.useCallback)(
    (P) => {
      if (g.current)
        return;
      R(600);
      const L = W(P);
      E(P, L);
    },
    [W, E]
  ), F = (0, import_react.useCallback)(() => {
    const { visibilityState: P, hidden: L } = document;
    if (P)
      return L || !It(C.current) ? void 0 : k("next");
    k("next");
  }, [C, k]), q = (0, import_react.useCallback)(() => {
    d.current && (clearInterval(d.current), d.current = null), d.current = setInterval(F, n);
  }, [F, n]), Y = (P) => {
    c && x({ initialX: P.touches[0].clientX, initialY: P.touches[0].clientY });
  }, _ = (P) => {
    g.current = true;
    const { initialX: L, initialY: K } = $;
    if (!L || !K)
      return;
    const Z = P.touches[0].clientX, z = P.touches[0].clientY, H = L - Z, re = K - z;
    Math.abs(H) > Math.abs(re) && (H > 0 ? k("prev") : k("next")), x({ initialX: 0, initialY: 0 });
  }, j = () => {
    g.current = false;
  }, J = (0, import_react.useCallback)(
    (P) => {
      switch (P.key) {
        case "ArrowLeft":
          P.preventDefault(), k("prev");
          break;
        case "ArrowRight":
          P.preventDefault(), k("next");
          break;
      }
    },
    [k]
  );
  return (0, import_react.useEffect)(() => {
    if (a)
      return window.addEventListener("keydown", J), () => {
        window.removeEventListener("keydown", J);
      };
  }, [J, a]), (0, import_react.useEffect)(() => {
    const P = C.current, L = xt(P);
    p.current = L, D(L.length);
  }, [C]), (0, import_react.useEffect)(() => {
    u == null || u();
  }, [M, u]), (0, import_react.useEffect)(() => {
    q();
  }, [q]), (0, import_jsx_runtime.jsx)(
    "div",
    {
      onTouchStart: Y,
      onTouchMove: _,
      onTouchEnd: j,
      onMouseEnter: O,
      onMouseLeave: q,
      className: X,
      ref: C,
      ...f,
      children: (0, import_jsx_runtime.jsx)("div", { className: "carousel-inner", children: (0, import_jsx_runtime.jsxs)(ue.Provider, { value: { active: h }, children: [
        l && (0, import_jsx_runtime.jsx)(Ct, { to: S, imagesCount: y }),
        s,
        o && (0, import_jsx_runtime.jsx)(Pt, { move: k })
      ] }) })
    }
  );
};
Ft.defaultProps = { fade: false, interval: 5e3, touch: true, keyboard: false };
var ys = ({
  className: e,
  captionClassName: t,
  children: r,
  src: s,
  alt: n,
  itemId: a,
  video: c,
  ...o
}) => {
  const { active: l } = (0, import_react.useContext)(ue), u = (0, import_react.useRef)(true), f = (0, import_react.useRef)(null), p = clsx_m_default("carousel-caption d-none d-md-block", t);
  return (0, import_react.useEffect)(() => {
    if (u.current && l === a - 1) {
      const d = f.current;
      d == null || d.classList.add("active");
    }
    u.current = false;
  }, [l, a]), (0, import_jsx_runtime.jsxs)("div", { className: "carousel-item", ref: f, children: [
    c ? (0, import_jsx_runtime.jsx)("video", { className: e, autoPlay: true, loop: true, muted: true, ...o, children: (0, import_jsx_runtime.jsx)("source", { src: s, type: "video/mp4" }) }) : (0, import_jsx_runtime.jsx)("img", { className: e, src: s, alt: n, ...o }),
    (0, import_jsx_runtime.jsx)("div", { className: p, children: r })
  ] });
};
var we = import_react.default.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0
});
var Wt = import_react.default.forwardRef(
  ({ alwaysOpen: e, borderless: t, className: r, flush: s, initialActive: n, tag: a, children: c, onChange: o, ...l }, u) => {
    const f = clsx_m_default("accordion", s && "accordion-flush", t && "accordion-borderless", r), [p, d] = (0, import_react.useState)(n);
    return (0, import_react.useEffect)(() => {
      p && o && o(p);
    }, [o, p]), (0, import_jsx_runtime.jsx)(a, { className: f, ref: u, ...l, children: (0, import_jsx_runtime.jsx)(we.Provider, { value: { activeItem: p, setActiveItem: d, alwaysOpen: e, initialActive: n }, children: c }) });
  }
);
Wt.defaultProps = { tag: "div", initialActive: 0 };
var Xt = import_react.default.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: r,
    headerClassName: s,
    collapseId: n,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: l,
    children: u,
    ...f
  }, p) => {
    const { activeItem: d, setActiveItem: b, alwaysOpen: g, initialActive: h } = (0, import_react.useContext)(we), [v, y] = (0, import_react.useState)(h), D = clsx_m_default("accordion-item", e), $ = clsx_m_default("accordion-header", s), x = clsx_m_default("accordion-body", t), M = clsx_m_default(
      "accordion-button",
      g ? n !== v && "collapsed" : n !== d && "collapsed",
      o
    ), A = (C) => {
      g ? y(C !== v ? C : 0) : b(C !== d ? C : 0);
    };
    return (0, import_jsx_runtime.jsxs)(l, { className: D, ref: p, ...f, children: [
      (0, import_jsx_runtime.jsx)("h2", { className: $, style: c, children: (0, import_jsx_runtime.jsx)("button", { onClick: () => A(n), className: M, type: "button", children: a }) }),
      (0, import_jsx_runtime.jsx)(
        ve,
        {
          id: n.toString(),
          show: g ? v === n : d === n,
          children: (0, import_jsx_runtime.jsx)("div", { className: x, style: r, children: u })
        }
      )
    ] });
  }
);
Xt.defaultProps = { tag: "div" };
var _t = ({
  className: e,
  size: t,
  contrast: r,
  value: s,
  defaultValue: n,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: l,
  wrapperTag: u,
  label: f,
  onChange: p,
  children: d,
  labelRef: b,
  labelStyle: g,
  inputRef: h,
  onBlur: v,
  readonly: y,
  ...D
}) => {
  var Y;
  const $ = (0, import_react.useRef)(null), x = (0, import_react.useRef)(null), M = b || $, A = h || x, [C, X] = (0, import_react.useState)(s || n), [O, w] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)(
    s !== void 0 && s.length > 0 || (n !== void 0 && n.length) > 0
  ), W = clsx_m_default("form-outline", r && "form-white", o), B = clsx_m_default("form-control", E && "active", t && `form-control-${t}`, e), S = clsx_m_default("form-label", c);
  (0, import_react.useEffect)(() => {
    var _;
    M.current && ((_ = M.current) == null ? void 0 : _.clientWidth) !== 0 && w(M.current.clientWidth * 0.8 + 8);
  }, [M, (Y = M.current) == null ? void 0 : Y.clientWidth]);
  const k = () => {
    M.current && w(M.current.clientWidth * 0.8 + 8);
  };
  (0, import_react.useEffect)(() => {
    s !== void 0 && (s.length > 0 ? R(true) : R(false));
  }, [s]), (0, import_react.useEffect)(() => {
    n !== void 0 && (n.length > 0 ? R(true) : R(false));
  }, [n]);
  const F = (_) => {
    X(_.currentTarget.value), p && p(_);
  }, q = (0, import_react.useCallback)(
    (_) => {
      C !== void 0 && C.length > 0 || s !== void 0 && s.length > 0 ? R(true) : R(false), v && v(_);
    },
    [C, s, v]
  );
  return (0, import_jsx_runtime.jsxs)(u, { className: W, style: { ...l }, children: [
    (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        readOnly: y,
        className: B,
        onBlur: q,
        onChange: F,
        onFocus: k,
        defaultValue: n,
        value: s,
        id: a,
        ref: A,
        ...D
      }
    ),
    f && (0, import_jsx_runtime.jsx)("label", { className: S, style: g, htmlFor: a, ref: M, children: f }),
    (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: O } }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
    ] }),
    d
  ] });
};
_t.defaultProps = { wrapperTag: "div", readonly: false };
var jt = ({
  children: e,
  invalid: t,
  feedback: r,
  tooltip: s,
  tag: n,
  ...a
}) => {
  const [c, o] = (0, import_react.useState)(null), l = (0, import_react.useRef)(null), u = clsx_m_default(
    t ? `invalid-${s ? "tooltip" : "feedback"}` : `valid-${s ? "tooltip" : "feedback"}`
  );
  return (0, import_react.useEffect)(() => {
    var p, d;
    const f = (d = (p = l.current) == null ? void 0 : p.querySelector("input, textarea")) == null ? void 0 : d.parentElement;
    f && o(f);
  }, []), (0, import_jsx_runtime.jsxs)(n, { ref: l, ...a, children: [
    c && (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsx)("div", { className: u, children: r }), c),
    e
  ] });
};
jt.defaultProps = {
  tag: "div",
  feedback: "Looks good!"
};
export {
  Wt as MDBAccordion,
  Xt as MDBAccordionItem,
  Ce as MDBBadge,
  Ht as MDBBreadcrumb,
  Ue as MDBBreadcrumbItem,
  ae as MDBBtn,
  xe as MDBBtnGroup,
  ke as MDBCard,
  We as MDBCardBody,
  Xe as MDBCardFooter,
  je as MDBCardGroup,
  Oe as MDBCardHeader,
  Qt as MDBCardImage,
  Zt as MDBCardLink,
  _e as MDBCardOverlay,
  Ae as MDBCardSubTitle,
  Fe as MDBCardText,
  Se as MDBCardTitle,
  Ft as MDBCarousel,
  ys as MDBCarouselItem,
  os as MDBCheckbox,
  Ee as MDBCol,
  ve as MDBCollapse,
  $e as MDBContainer,
  ls as MDBDropdown,
  is as MDBDropdownItem,
  us as MDBDropdownMenu,
  ds as MDBDropdownToggle,
  gs as MDBFile,
  es as MDBFooter,
  zt as MDBIcon,
  nt as MDBInput,
  Dt as MDBInputGroup,
  Ye as MDBListGroup,
  Ve as MDBListGroupItem,
  fs as MDBModal,
  Nt as MDBModalBody,
  ht as MDBModalContent,
  bt as MDBModalDialog,
  wt as MDBModalFooter,
  vt as MDBModalHeader,
  yt as MDBModalTitle,
  Qe as MDBNavbar,
  ze as MDBNavbarBrand,
  He as MDBNavbarItem,
  Ze as MDBNavbarLink,
  et as MDBNavbarNav,
  tt as MDBNavbarToggler,
  ts as MDBPagination,
  ss as MDBPaginationItem,
  st as MDBPaginationLink,
  mt as MDBPopover,
  pt as MDBPopoverBody,
  gt as MDBPopoverHeader,
  rt as MDBProgress,
  he as MDBProgressBar,
  cs as MDBRadio,
  Mt as MDBRange,
  be as MDBRipple,
  Ge as MDBRow,
  ms as MDBScrollspy,
  Tt as MDBScrollspyLink,
  Bt as MDBScrollspySubList,
  Le as MDBSpinner,
  ps as MDBSwitch,
  rs as MDBTable,
  as as MDBTableBody,
  ns as MDBTableHead,
  bs as MDBTabs,
  $t as MDBTabsContent,
  hs as MDBTabsItem,
  vs as MDBTabsLink,
  Et as MDBTabsPane,
  _t as MDBTextArea,
  qe as MDBTooltip,
  Ke as MDBTypography,
  Rt as MDBValidation,
  jt as MDBValidationItem
};
//# sourceMappingURL=mdb-react-ui-kit.js.map
