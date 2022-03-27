(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    /**
     * Uses the react-transform babel plugin
     * to rewrite modules so that all react components are
     * exported.
     *
     * This allows us to access those components and test them.
     *
     * ex:
     *
     * // component.js
     *
     * var MyComponent = React.createClass({});
     *
     * // component-test.js
     *
     * var components = require('../component.js');
     *
     * console.log(components.__ReactComponents.MyComponent);
     *
     */
    
    module.exports = function createExport(_ref) {
      var locals = _ref.locals;
    
    
      return function (ReactClass, componentId) {
    
        if (!locals[0].exports) {
          locals[0].exports = {};
        }
    
        if (!locals[0].exports.__ReactComponents) {
          locals[0].exports.__ReactComponents = [];
        }
    
        locals[0].exports.__ReactComponents.push(ReactClass);
    
        return ReactClass;
      };
    };
    
    },{}],2:[function(require,module,exports){
    'use strict';
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _reactDom = require('react-dom');
    
    var _reactDom2 = _interopRequireDefault(_reactDom);
    
    var _Profile = require('./Profile');
    
    var _Directory = require('./Directory');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      App: {
        displayName: 'App'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/App.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    //importe le composant Profile
    
    //importe le composant Directory
    
    
    //Composant 
    var App = _wrapComponent('App')(function (_React$Component) {
      _inherits(App, _React$Component);
    
      //Fonction de montage 1
      //le constructeur
      function App(props) {
        _classCallCheck(this, App);
    
        //Etat de composant
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    
        _this.state = {
          currentUsername: null
        };
        ///rajouter la fonction handleChoose, et handleReturnToDirectoryClick au constructeur
        _this.handleChoose = _this.handleChoose.bind(_this);
        _this.handleReturnToDirectoryClick = _this.handleReturnToDirectoryClick.bind(_this);
        return _this;
      }
      //Fonction gestionnaire d'event
      //prend un username en param
      //met à jour l'état de l'attribut currentUser du composant App
    
    
      _createClass(App, [{
        key: 'handleChoose',
        value: function handleChoose(newUsername) {
          this.setState({ currentUsername: newUsername });
        }
    
        //Fonction gestionnaire d'event
        //réinitialise l'état de l'attribut de composant courant à ses propriétés d'origines
    
      }, {
        key: 'handleReturnToDirectoryClick',
        value: function handleReturnToDirectoryClick() {
          this.setState({ currentUsername: null });
        }
    
        //F de rendu 
    
      }, {
        key: 'render',
        value: function render() {
          var body = void 0;
          //Condition : Si l'état de l'att de comp actuel renvoie true 
          //il initialise la var body avec les informations du composant profiles 
          if (this.state.currentUsername) {
            body = _react3.default.createElement(_Profile.Profile, {
              username: this.state.currentUsername,
              onChoose: this.handleChoose
            });
          } else {
            //sinon il initialise la var body avec le composant directory en renvoie la fonction de gest d'event handleChoose
            body = _react3.default.createElement(_Directory.Directory, { onChoose: this.handleChoose });
          }
          //renvoie un élément jsx de type html 
          //affiche l'info de username actuel comme titre 
          //renvoie  un bouton conteant la fonction de gest d'event handleReturnToDirectoryClick permettant de retourner au composant Directory
          //dans le main il affiche 
          return _react3.default.createElement(
            'div',
            { className: 'App' },
            _react3.default.createElement(
              'header',
              null,
              _react3.default.createElement(
                'h1',
                null,
                'PetBook'
              ),
              _react3.default.createElement(
                'nav',
                null,
                this.state.currentUsername && _react3.default.createElement(
                  'button',
                  { onClick: this.handleReturnToDirectoryClick },
                  'Return to directory'
                )
              )
            ),
            _react3.default.createElement(
              'main',
              null,
              body
            )
          );
        }
      }]);
    
      return App;
    }(_react3.default.Component));
    //Rendu
    
    
    _reactDom2.default.render(_react3.default.createElement(App, null), document.getElementById('app'));
    
    },{"./Directory":3,"./Profile":4,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Directory = Directory;
    
    var _react = require('react');
    
    var _react2 = _interopRequireDefault(_react);
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    //Exporte la fonction Directory
    function Directory(props) {
      //renvoie une expression jsx et transfert au composant UserList un tableau usernames et recoit les informations de fonction de gest d'event onChoose et les appliques au gestionnaire onChoose du composant
      return _react2.default.createElement(
        'div',
        { className: 'Directory' },
        _react2.default.createElement(
          'h2',
          null,
          'User directory'
        ),
        _react2.default.createElement(_Userlist.Userlist, {
          usernames: ['dog', 'cat', 'komodo'],
          onChoose: props.onChoose
        })
      );
    }
    //importe le composant Userlist
    
    },{"./Userlist":5,"react":undefined}],4:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Profile = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _dataFetcher = require('./dataFetcher');
    
    var _Userlist = require('./Userlist');
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Profile: {
        displayName: 'Profile'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/Profile.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    //Récupérer des données du serveur 
    
    //composant UserList importé
    
    
    //Exporter le composant Profile
    var Profile = exports.Profile = _wrapComponent('Profile')(function (_React$Component) {
      _inherits(Profile, _React$Component);
    
      //Fonction de montage 1
      //Le constructeur
      function Profile(props) {
        _classCallCheck(this, Profile);
    
        //Etat de composaant
        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    
        _this.state = { userData: null };
        return _this;
      }
      //1. Définit état de userData  sur null pendant le chargement des données
      //2. Récupère les données utilisateur avec fetchUserData 
    
    
      _createClass(Profile, [{
        key: 'loadUserData',
        value: function loadUserData() {
          var _this2 = this;
    
          this.seTstate({ userData: null });
          this.fetchID = (0, _dataFetcher.fetchUserData)(this.props.username, function (userData) {
            _this2.setState({ userData: userData });
          });
        }
        //F de rendu un élément jsx de type htlm transmets des informations avec le composant UserList
        //récoit l'attribut surname qui est un tableau de l'objet props
        //recoit la fonction de gest d'event onChoose du composant 
    
      }, {
        key: 'render',
        value: function render() {
          //Si les données se charge alors isLoading est égal à true
          if (this.state.userData === null) {
            var _isLoading = true;
          }
    
          var className = 'Profile';
          var name = void 0;
          var bio = void 0;
          var friends = void 0;
    
          if (isLoading) {
            className += ' loading';
            name += 'name is loading...';
            bio += 'Bio is loading...';
            friends += [];
          } else {
            name = this.state.userData.name;
            bio = this.state.userData.bio;
            friends = this.state.userData.friends;
          }
    
          return _react3.default.createElement(
            'div',
            { className: className },
            _react3.default.createElement(
              'div',
              { className: 'profile-picture' },
              !isLoading && _react3.default.createElement('img', { src: this.state.userData.profilePictureUrl, alt: '' })
            ),
            _react3.default.createElement(
              'div',
              { className: 'profile-body' },
              _react3.default.createElement(
                'h2',
                null,
                name,
                '}'
              ),
              _react3.default.createElement(
                'h3',
                null,
                '@',
                this.props.username
              ),
              _react3.default.createElement(
                'p',
                null,
                bio
              ),
              _react3.default.createElement(
                'h3',
                null,
                'My friends'
              ),
              _react3.default.createElement(_Userlist.Userlist, { usernames: [], onChoose: this.props.onChoose })
            )
          );
        }
        //Fonction de montage 2
    
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.loadUserData();
        }
      }]);
    
      return Profile;
    }(_react3.default.Component));
    
    },{"./Userlist":5,"./dataFetcher":6,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],5:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Userlist = undefined;
    
    var _react2 = require('react');
    
    var _react3 = _interopRequireDefault(_react2);
    
    var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
    
    var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    
    var _components = {
      Userlist: {
        displayName: 'Userlist'
      }
    };
    
    var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
      filename: '/home/ccuser/workspace/react-lifecycle-methods-social-network-for-pets-workspace/Userlist.js',
      components: _components,
      locals: [module],
      imports: [_react3.default]
    });
    
    function _wrapComponent(id) {
      return function (Component) {
        return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
      };
    }
    
    //Exporter le composant UserList
    var Userlist = exports.Userlist = _wrapComponent('Userlist')(function (_React$Component) {
      _inherits(Userlist, _React$Component);
    
      //Fonction de montage 1
      //Le constructeur
      function Userlist(props) {
        _classCallCheck(this, Userlist);
    
        //rajouter la fonction handleClick au constructeur
        var _this = _possibleConstructorReturn(this, (Userlist.__proto__ || Object.getPrototypeOf(Userlist)).call(this, props));
    
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
      }
      //F de Gest d'event
      //permet d'attribuer le nom l'élément qui l'appel
    
    
      _createClass(Userlist, [{
        key: 'handleClick',
        value: function handleClick(event) {
          this.props.onChoose(event.target.dataset.username);
        }
        //Fonction de montage 2
        //renvoie un élement jsx de type html, transfert une fonction de gest d'event. affiche les informations récus par le composant Profile
        //utilise le clé pour garder une trace de liste
        //affiche les username
    
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;
    
          return _react3.default.createElement(
            'ul',
            null,
            this.props.usernames.map(function (username) {
              return _react3.default.createElement(
                'li',
                { key: username },
                _react3.default.createElement(
                  'button',
                  { 'data-username': username, onClick: _this2.handleClick },
                  '@',
                  username
                )
              );
            })
          );
        }
      }]);
    
      return Userlist;
    }(_react3.default.Component));
    
    },{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}],6:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    
    exports.fetchUserData = fetchUserData;
    exports.cancelFetch = cancelFetch;
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    // This module exports fake data fetching functionality.
    // In a real app, this would grab data from the internet, but
    // this module just waits a little bit before responding.
    //
    // You don't need to look at this, but you can if you want!
    
    var FAKE_USER_DATA = {
      cat: {
        name: 'Kitty Cat',
        bio: "I'm the coolest cat around. I'm the cat's meow!",
        profilePictureUrl: 'https://content.codecademy.com/courses/React/react_lifecycle_cat_profile_picture.jpg',
        friends: ['komodo']
      },
      dog: {
        name: 'Doggy Dog',
        bio: "I'm the doggity dog! Woof woof!",
        profilePictureUrl: 'https://content.codecademy.com/courses/React/react_lifecycle_dog_profile_picture.jpg',
        friends: ['komodo']
      },
      komodo: {
        name: 'Lizard Lady',
        bio: "I'm a Komodo dragon. You'll love me.",
        profilePictureUrl: 'https://content.codecademy.com/courses/React/react_lifecycle_komodo_profile_picture.jpg',
        friends: ['cat', 'dog']
      }
    };
    
    var timeoutByFetchId = new Map();
    
    var Fetch = function Fetch() {
      _classCallCheck(this, Fetch);
    
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2)
      });
    };
    
    function fetchUserData(username, callback) {
      if (!FAKE_USER_DATA.hasOwnProperty(username)) {
        throw new Error('Invalid username. Make sure it is "cat", "dog", or "komodo".');
      }
    
      var fetch = new Fetch();
    
      var delay = Math.floor(Math.random() * 1000) + 500;
      var timeout = setTimeout(function () {
        timeoutByFetchId.delete(fetch._id);
        callback(FAKE_USER_DATA[username]);
      }, delay);
    
      timeoutByFetchId.set(fetch._id, timeout);
    
      return fetch;
    }
    
    function cancelFetch(fetch) {
      if (!fetch || (typeof fetch === 'undefined' ? 'undefined' : _typeof(fetch)) !== 'object') {
        return;
      }
      var timeout = timeoutByFetchId.get(fetch._id);
      clearTimeout(timeout);
      timeoutByFetchId.delete(fetch._id);
    }
    
    },{}]},{},[2]);
    