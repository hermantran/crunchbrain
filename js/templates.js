define([
  'underscore'
], function(_) {
  var Templates = {};

  Templates.projects = [
    '<div class="row text-center content-bar">',
      '<a href="#" class="text-bold">Featured Projects</a>',
      '<a href="#" class="text-bold">Recent Projects</a>',
    '</div>',
    '<h4 class="text-center">Featured Projects</h4>',
    '<div class="row text-center featured-projects"></div>',
    '<h4 class="text-center">Recent Projects</h4>',
    '<div class="row text-center recent-projects"></div>',
  ];

  Templates.profiles = [
    '<h4 class="text-center">Profiles</h4>',
    '<div class="row text-center recent-profiles"></div>',
  ];

  Templates.events = [
    '<div class="row text-center content-bar">',
      '<a href="#" class="text-bold">Featured Events</a>',
      '<a href="#" class="text-bold">Recent Events</a>',
    '</div>',
    '<h4 class="text-center">Featured Events</h4>',
    '<div class="row text-center featured-events"></div>',
    '<h4 class="text-center">Recent Events</h4>',
    '<div class="row text-center recent-events"></div>',
  ];

  Templates.project = [
    '<h3 class="text-center title text-bold is-clickable"><%= title %></h3>',
    '<div class="text-center">By <%= team %></div>',
    '<div class="row">',
      '<div class="col-lg-8">',
        '<b>Pitch</b>',
        '<div class="project-box">',
          '<p class="pitch is-clickable"><%= pitch %></p>',
        '</div>',
        '<b>Project</b>',
        '<div class="project-box">',
          '<div class="text-center media"><img src="<%= img %>"></div>',
          '<p>Description: <%= description %></p>',
          '<p>Technology: <%= technology %></p>',
        '</div>',
        '<b>Activity</b>',
        '<div class="project-box">',
          '<p>Current status: <%= current_status %></p>',
          '<p>Next: <%= next %></p>',
        '</div>',
        '<b>Team</b>',
        '<div class="project-box">',
          '<table class="table table-striped">',
            '<thead><tr>',
              '<th>Matt</th><th>Catherine</th><th>Herman</th><th>Ricardo</th><th>Chuck</th>',   
            '</tr></thead>',
            '<tbody>',
              '<tr><td>Wireframe</td><td>PM</td><td>Home page</td><td>Backend</td><td>Visual design</td></tr>',
              '<tr><td>Presentation</td><td></td><td>Project page</td><td>SendGrid</td><td></td></tr>',
              '<tr><td></td><td></td><td>Profile page</td><td></td><td></td></tr>',
            '</tbody>',
          '</table>',
        '</div>',
      '</div>',
      '<div class="col-lg-4">',
        '<b>Needs</b>',
        '<div class="project-box">',
          '<ul>',
            '<li>Developers</li>',
            '<li>Designers</li>',
          '</ul>',
        '</div>',
        '<b>Latest</b>',
        '<div class="project-box">',
          '<ul>',
            '<li>First demo on 10/20/2013</li>',
            '<li>First wireframe on 10/19/2013</li>',
            '<li>Created on 10/18/2013</li>',
          '</ul>',
        '</div>',
      '</div>',
    '</div>'
  ];

  Templates.profile = [
    '<h3 class="text-center title"> <b> <%= name %> </b> </h3>',
    '<div class="text-center"><%= location %>, CA</div>',
    '<div class="row">',
      '<div class="col-lg-8">',
        '<br>',
        '<div class="project-box text-center">',
          '<div class="text-center media" style="border-bottom: 0"><img src="<%= img %>" style="max-height: 400px"></div>',
        '</div>',
        '<b>Contact Me</b>',
        '<div class="project-box">',
          'Twitter: <a href="#">@<%= name %></a><br>',
          'Facebook: <a href="#"><%= name %></a><br>',
        '</div>',
        '<b>Groups/Associations</b>',
        '<div class="project-box">',
          '<%= groups %>',
        '</div>',
        '<b>Created Projects</b>',
        '<div class="project-box">',
          '<div class="text-center media"><img src="<%= project_img %>"></div>',
          '<b>CrunchBrain</b>',
        '</div>',
      '</div>',
      '<div class="col-lg-4">',
        '<b>Bio</b>',
        '<div class="project-box">',
          '<p><%= bio %>',
        '</div>',
        '<b>Experience</b>',
        '<div class="project-box">',
          '<ul>',
            '<li><%= experience %></li>',
          '</ul>',
        '</div>',
        '<b>Skills</b>',
        '<div class="project-box">',
          '<ul>',
            '<li><%= skills %></li>',
          '</ul>',
        '</div>',
        '<b>Awards</b>',
        '<div class="project-box">',
          '<ul>',
            '<li><%= awards %></li>',
          '</ul>',
        '</div>',
        '<b>Interests</b>',
        '<div class="project-box">',
          '<ul>',
            '<li><%= interests %></li>',
          '</ul>',
        '</div>',
      '</div>',
    '</div>'
  ];

  Templates.box = [
    '<div class="box shadow">',
      '<img src="<%= img %>" width="100%">',
      '<b><%= title %></b>',
      '<br>Project needs: <b>Developers, Designers</b>',
      '<p><%= description %></p>',
      '<p>Project by: <%= team %> </p>',
    '</div>'
  ];

  Templates.eventBox = [
  '<div class="col-lg-4">',
    '<div class="box shadow">',
      '<img src="<%= img %>" width="100%">',
      '<b><%= title %></b>',
      '<p><%= description %></p>',
      '<p><%= date %> </p>',
    '</div>',
  '</div>'
  ];

  Templates.profileBox = [
    '<div class="box shadow">',
      '<img src="<%= img %>" width="100%">',
      '<b><%= name %></b>',
      '<br><%= location %>, CA',
      '<br><%= position %>',
      '<br>Interests: <%= interests %>',
      '<br>Experience: <%= experience %>',
      '<br>Education: <%= education %>',
      '<br>Skills: <%= skills %>',
    '</div>'
  ];

  Templates.login = [
    '<div class="col-lg-4 col-lg-offset-4">',
      '<form class="form-signin">',
        '<br>',
        '<input type="text" class="form-control" placeholder="Email address" autofocus>',
        '<input type="password" class="form-control" placeholder="Password">',
        '<label class="checkbox">',
          '<input type="checkbox" value="remember-me"> Remember me',
        '</label>',
        '<button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>',
      '</form>',
    '</div>'
  ];

  Templates.signup = [
    '<div class="col-lg-4 col-lg-offset-4">',
      '<div class="text-center">',
      '<br>',
      '<img src="img/facebook.png" width="80%">',
      '<img src="img/google.png" width="80%">',
      '<h4>Or sign up</h4></div>',
      '<form class="form-signin">',
        '<input type="text" class="form-control" placeholder="Name" autofocus>',
        '<input type="text" class="form-control" placeholder="Location">',
        '<input type="text" class="form-control" placeholder="Position">',
        '<input type="text" class="form-control" placeholder="Email address">',
        '<input type="password" class="form-control" placeholder="Password">',
        '<input type="password" class="form-control" placeholder="Confirm password">',
        '<button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>',
      '</form>',
    '</div>'
  ];

  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = _.template(Templates[tmpl].join('\n'));
    }
  }

  return Templates;
});