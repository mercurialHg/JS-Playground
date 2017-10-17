;(function (global, $) {
  
    if ($ !== jQuery || !$) throw 'this plugin requires jQuery';
  
    var Greetr = function (first, last, lang) {
        return new Greetr.init(first, last, lang);
    };
    //constructor
    var init = Greetr.init = function (first, last, lang) {
        this.first = titleCase(first);
        this.last = titleCase(last);
        //language defaults to 'en' if undefined or incorect format
        this.lang = !lang ? "en" : lang !== "en" && lang !== "es" ? "en" : lang;
    };

    $.extend(init.prototype,
        {
            greet: function () {
                var lang = this.lang,
                    defaultLang = "en",
                    type = arguments[0];
                if (lang !== "en" && lang !== "es") lang = "en";
                if (type !== "formal" && type !== "informal") type = "informal";

                if (lang === "es") greetEs.call(this, type);
                else greetEn.call(this, type);

                return this;


                //declare greetEn, greetEs
                function greetEn(type) {
                    if (type === "informal") {
                        this.greeting = `Hello, my name is ${this.first}.`;
                    } else {
                        this.greeting = `My name is ${this.first} ${this.last}, pleased to meet you!`;
                    }
                }
                function greetEs(type) {
                    if (type === "informal") {
                        this.greeting = `Hola, mi nombre es ${this.first}.`;
                    } else {
                        this.greeting = `Mi nombre es ${this.first} ${this.last}, encantado de conocerte!`;
                    }
                }
            },

            attachTo: function (selector, externalCall) {
                if (!selector || 
                    (typeof selector !== 'string' && !(selector instanceof $))
                ) throw 'need to specify a selector';
                //if called by .insert, which uses $ obj as selector param, don't run $ again
                var $target = selector instanceof $ ? selector : $(selector);
                this.targets = this.targets || [];
                this.targets.push($target);
                //if not called by other function
                if (!externalCall) {return this}
            },

            insert: function (selector, type) {
                if (!this.greeting) this.greet(type);
                var $target = $(selector);
                this.attachTo($target, true);
                $target.text(this.greeting);

                return this
            }
        })



    global.Greetr = global.G$ = Greetr;
    return Greetr;

    //helper functions
    function titleCase(input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
})(window, jQuery);
