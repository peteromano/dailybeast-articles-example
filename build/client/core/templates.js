Ember.TEMPLATES["client/core/templates/application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("All Articles");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Technology");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Politics");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Entertainment");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Sports");
  }

  data.buffer.push("<section id=\"main\">\n  <nav>\n    <ul>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "article.category", "technology", options) : helperMissing.call(depth0, "link-to", "article.category", "technology", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "article.category", "politics", options) : helperMissing.call(depth0, "link-to", "article.category", "politics", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "article.category", "entertainment", options) : helperMissing.call(depth0, "link-to", "article.category", "entertainment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "article.category", "sports", options) : helperMissing.call(depth0, "link-to", "article.category", "sports", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </nav>\n  <section id=\"content\">");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</section>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["client/core/templates/articles/list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <header>");
  stack1 = helpers._triageMustache.call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</header>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    <header>All Articles</header>\n  ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "article", "in", "controller", {hash:{
    'itemController': ("article")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <section class=\"article\">\n        ");
  stack1 = helpers['if'].call(depth0, "article.isRemoved", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </section>\n    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "undo", {hash:{
    'target': ("article")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Undo</button>\n          Article ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article", "article.model", options) : helperMissing.call(depth0, "link-to", "article", "article.model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" has been removed from the category <em>");
  data.buffer.push(escapeExpression((helper = helpers.capitalize || (depth0 && depth0.capitalize),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "article.category", options) : helperMissing.call(depth0, "capitalize", "article.category", options))));
  data.buffer.push("</em>\n        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<strong>");
  stack1 = helpers._triageMustache.call(depth0, "article.headline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "article.category", {hash:{
    'target': ("article")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Remove from <em>");
  data.buffer.push(escapeExpression((helper = helpers.capitalize || (depth0 && depth0.capitalize),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "article.category", options) : helperMissing.call(depth0, "capitalize", "article.category", options))));
  data.buffer.push("</em></button>\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ArticleView", {hash:{
    'controller': ("article")
  },hashTypes:{'controller': "ID"},hashContexts:{'controller': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "model.isError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("\n      <section class=\"loading\">\n        <p>Loading...</p>\n      </section>\n    ");
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "model.isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program16(depth0,data) {
  
  
  data.buffer.push("\n          <section class=\"error\">\n            <p>Couldn't find any articles</p>\n          </section>\n        ");
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\n          <section class=\"loading\">\n            <p>Loading...</p>\n          </section>\n        ");
  }

  data.buffer.push("<section id=\"articles\">\n  ");
  stack1 = helpers['if'].call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["client/core/templates/articles/show"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isDetail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <section class=\"headline\">\n        <figure class=\"photo\">\n          ");
  stack1 = helpers['if'].call(depth0, "isDetail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </figure>\n        <div class=\"details\">\n            ");
  stack1 = helpers['if'].call(depth0, "isDetail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <aside class=\"category\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article.category", "category", options) : helperMissing.call(depth0, "link-to", "article.category", "category", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</aside>\n            <time>");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "published", options) : helperMissing.call(depth0, "date", "published", options))));
  data.buffer.push("</time>\n        </div>\n      </section>\n      <div class=\"clear\"></div>\n      <section class=\"description\">\n        ");
  stack1 = helpers['if'].call(depth0, "isDetail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </section>\n      <section class=\"tags\">Tags: <em>");
  data.buffer.push(escapeExpression((helper = helpers.tag || (depth0 && depth0.tag),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "tags", options) : helperMissing.call(depth0, "tag", "tags", options))));
  data.buffer.push("</em></section>\n  ");
  stack1 = helpers['if'].call(depth0, "isDetail", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n    <section class=\"article\">\n  ");
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n              <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photoUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article", "", options) : helperMissing.call(depth0, "link-to", "article", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n              <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photoUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <strong>");
  stack1 = helpers._triageMustache.call(depth0, "headline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article", "", options) : helperMissing.call(depth0, "link-to", "article", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<strong>");
  stack1 = helpers._triageMustache.call(depth0, "headline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<em>");
  data.buffer.push(escapeExpression((helper = helpers.capitalize || (depth0 && depth0.capitalize),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "category", options) : helperMissing.call(depth0, "capitalize", "category", options))));
  data.buffer.push("</em>");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.parse || (depth0 && depth0.parse),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "parse", "description", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data},helper ? helper.call(depth0, "description", 100, options) : helperMissing.call(depth0, "truncate", "description", 100, options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program20(depth0,data) {
  
  
  data.buffer.push("\n    </section>\n  ");
  }

function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program23(depth0,data) {
  
  
  data.buffer.push("\n      <section class=\"error\">\n        <p>Article does not exist</p>\n      </section>\n    ");
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isSaving", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program26(depth0,data) {
  
  
  data.buffer.push("\n          <section class=\"saving\">\n            <p>Saving...</p>\n          </section>\n        ");
  }

function program28(depth0,data) {
  
  
  data.buffer.push("\n          <section class=\"loading\">\n            <p>Loading...</p>\n          </section>\n        ");
  }

  stack1 = helpers['if'].call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});