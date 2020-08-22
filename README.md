## Overview libraries using in the project

This uses some supporting pluggins:
- React Libraries (Main Platform): 'react', 'react-dom'.
- React Router V4 (React Pluggin): 'react-router', 'react-router-dom'.
- MobX (Management State Library): 'moxb', 'mobx-react'.
- Gulp (Task Runner Library - which supports to build multiple skin-css): 'gulp', 'gulp-sass', 'gulp-clean-css'
- Webpack (Bundling Module support to build project): 'webpack'
- SASS - Pre-Proccessor: 'sass', 'node-sass'
- Library UI: 'react-bootstrap'

## Guideline for focusing and developing to project

# 1. Using command line (CLI) in project

*Note: You can 'yarn' or 'npm' to work with project.

Current time, we just use 'start' & 'build' to develop and pack modules in project:

- Build project for the production environment:
```
  npm build    
  yarn build 
```

- Start project at the develop environment:
```
  npm start
  yarn start
```
# 2. Structure of project
```
bo-affiliate-ui
|   gulpfile.js
|   jsconfig.json
|   package.json
|   pom.xml
|   README.md
|   web.xml     
+---config
|   |   env.js
|   |   modules.js
|   |   paths.js
|   |   pnpTs.js
|   |   webpack.config.js
|   |   webpackDevServer.config.js
|   |   
|   \---jest
|           cssTransform.js
|           fileTransform.js          
+---nginx
|       nginx-dev.conf
+---build                   
+---public
|   |   index.html
|   |   manifest.json
|   |    css 
|   |    data-resoures     
|   |    fonts             
|   |    images                 
|   |    locales           
+---scripts
|       build.js
|       start.js
|       test.js
|       
+---src
|   |   build.properties
|   |   index.js
|   |   serviceWorker.js
|   |   setupTests.js
|   |   
|   +---app
|   |   |   App.js
|   |   |   Routes.js
|   |   |   
|   |   +---actions
|   |   |       AccountAction.js
|   |   | 
|   |   +---api-urls
|   |   |       DashboardApis.js
|   |   |        
|   |   +---commons
|   |   |       CommonUtils.js
|   |   |       ComponentKeyMappings.js
|   |   |       ErrorBoundary.js
|   |   |       ErrorReportingTool.js
|   |   |       i18nConfiguration.js
|   |   |       RestApiInstance.js
|   |   |       
|   |   +---components
|   |   |   +---BaseComponent
|   |   |   |   +---AlertComponent
|   |   |   |   |       AlertComponentAction.js
|   |   |   |   |       index.js
|   |   |   |   |       
|   |   |   |   +---CheckboxComponent
|   |   |   |   |       index.js
|   |   |   |   |       
|   |   |   |   +---LoadingComponent
|   |   |   |   |       index.js
|   |   |   |   |       
|   |   |   |   +---NumberAutoFormat
|   |   |   |   |       index.js
|   |   |   |   |       utils.js
|   |   |   |   |       
|   |   |   |   +---PageTitleComponent
|   |   |   |   |       index.js
|   |   |   |   |       
|   |   |   |   +---SideBarComponent
|   |   |   |   |       index.js
|   |   |   |   |       InitialData.js
|   |   |   |   |       sidebar.js
|   |   |   |   |       
|   |   |   |   +---ToastComponent
|   |   |   |   |       index.js
|   |   |   |   |       
|   |   |   |   +---ToastGeneratorComponent
|   |   |   |   |       index.js
|   |   |   |   |       ToastGeneratorAction.js
|   |   |   |   |       
|   |   |   |   \---Wrapper
|   |   |   |           Checkbox.js
|   |   |   |           ControlledDropdown.js
|   |   |   |           Dropdown.js
|   |   |   |           Field.js
|   |   |   |           index.js
|   |   |   |           ValidationField.js
|   |   |   |           
|   |   |   +---pages
|   |   |   |   \---DashBoardPageComponent
|   |   |   |       |   index.js
|   |   |   |       |   
|   |   |   |       \---sample
|   |   |   |               SampleTranslate.js
|   |   |   |               
|   |   |   \---Templates
|   |   |       +---BottomMainComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       +---FooterComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       +---HeaderComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       +---LeftMenuComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       +---MainComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       +---RightMenuComponent
|   |   |       |       index.js
|   |   |       |       
|   |   |       \---TopMainComponent
|   |   |               index.js
|   |   |               
|   |   +---constants
|   |   |       LocalePathConst.js
|   |   |       LoginStatusConst.js
|   |   |       PageTitleConst.js
|   |   |       ToastMessageConst.js
|   |   |       ToastTypeConst.js
|   |   |       CommonConst.js
|   |   |       
|   |   +---decorators
|   |   |       loadLanguageOnPage.js
|   |   |       withRouter.js
|   |   |       
|   |   +---events
|   |   |       listeners.js
|   |   |       listEvents.js
|   |   |       
|   |   +---layouts
|   |   |       DynamicBody.js
|   |   |       LayoutPage.js
|   |   |       
|   |   +---services
|   |   |       TemplateServices.js
|   |   |       UserServices.js
|   |   |       
|   |   \---stores
|   |           AccountStore.js
|   |           LayoutTemplateStore.js
|   |           Store.js
|   |           
|   +---data-resoures
|   |   \---template-layout
|   |       +---pa
|   |       |   +---components
|   |       |   |       DashBoardPageComponent.json
|   |       |   |       
|   |       |   +---global
|   |       |   |       appInfos.json
|   |       |   |       cssFiles.json
|   |       |   |       
|   |       |   \---template
|   |       |       +---bodyContainer
|   |       |       |   \---dashBoardPage
|   |       |       |           leftContainer.json
|   |       |       |           mainContainer.json
|   |       |       |           rightContainer.json
|   |       |       |           topContainer.json
|   |       |       |           
|   |       |       +---footerContainer
|   |       |       |       formal.json
|   |       |       |       
|   |       |       \---headerContainer
|   |       |               formal.json
|   |       |               
|   |       \---pinbet88
|   |           +---components
|   |           |       DashBoardPageComponent.json
|   |           |       
|   |           +---global
|   |           |       appInfos.json
|   |           |       cssFiles.json
|   |           |       
|   |           \---template
|   |               +---bodyContainer
|   |               |   \---dashBoardPage
|   |               |           leftContainer.json
|   |               |           mainContainer.json
|   |               |           rightContainer.json
|   |               |           topContainer.json
|   |               |           
|   |               +---footerContainer
|   |               |       formal.json
|   |               |       
|   |               \---headerContainer
|   |                       formal.json
|   |                       
|   +---locales
|   |   +---de
|   |   |       default.json
|   |   |       
|   |   +---en
|   |   |       default.json
|   |   |       
|   |   +---es
|   |   |       default.json
|   |   |       
|   |   +---fr
|   |   |       default.json
|   |   |       
|   |   +---he
|   |   |       default.json
|   |   |       
|   |   +---id
|   |   |       default.json
|   |   |       
|   |   +---ja
|   |   |       default.json
|   |   |       
|   |   +---km
|   |   |       default.json
|   |   |       
|   |   +---ko
|   |   |       default.json
|   |   |       
|   |   +---pt
|   |   |       default.json
|   |   |       
|   |   +---ru
|   |   |       default.json
|   |   |       
|   |   +---th
|   |   |       default.json
|   |   |       
|   |   +---vi
|   |   |       default.json
|   |   |       
|   |   +---zh-cn
|   |   |       default.json
|   |   |       
|   |   \---zh-tw
|   |           default.json
|   |           
|   +---static
|   |       v.html
|   |       
|   \---styles
|       \---skins 
|           +---commons
|           |   +---abstracts
|           |   |   +---mixins
|           |   |   |       _common.scss
|           |   |   |       _header.scss
|           |   |   |       _pageTitleComponent.scss
|           |   |   |       
|           |   |   \---variables
|           |   |           _default_variables.scss
|           |   |           
|           |   +---base
|           |   |       _waitLoading.scss
|           |   |       
|           |   +---components
|           |   |       _pageTitleComponent.scss
|           |   |       
|           |   +---layouts
|           |   |       _body.scss
|           |   |       _footer.scss
|           |   |       _header.scss
|           |   |       _leftMenu.scss
|           |   |       _rightMenu.scss
|           |   |       
|           |   +---placeholders
|           |   |       _body.scss
|           |   |       _common.scss
|           |   |       _footer.scss
|           |   |       _leftMenu.scss
|           |   |       _pageTitleComponent.scss
|           |   |       _rightMenu.scss
|           |   |       
|           |   \---vendors
|           |       \---bootstrap                  
|           +---pa
|           |   +---abstracts
|           |   |   +---mixins
|           |   |   |       _common.scss
|           |   |   |       _header.scss
|           |   |   |       
|           |   |   \---variables
|           |   |           _all.scss
|           |   |           
|           |   +---components
|           |   +---layouts
|           |   |       _body.scss
|           |   |       _header.scss
|           |   |       
|           |   \---placeholders
|           \---pinbet88
|               +---abstracts
|               |   +---mixins
|               |   |       _common.scss
|               |   |       _header.scss
|               |   |       
|               |   \---variables
|               |           _all.scss
|               |           
|               +---components
|               |       _header.scss
|               |       
|               +---layouts
|               |       _body.scss
|               |       _header.scss
|               |       
\              \---placeholders
```
- 2.1. <b>gulpfiles.js</b>:
  <br>File configures tasks to run, build & watch reload (automation) - which is used to working with sass-files.

- 2.2. <b>jsconfig.json</b>:
  <br>File configures for javascript project - which is used to VSCode support JavaScript project such as compile decorator

- 2.3. <b>package.json</b>
  <br>File contains all configurations of project (libs-dependencies, script-task, plugins...)
  
- 2.4. <b>config/</b> folder:
  <br>It stores some configurations referred with building and running project.
  
- 2.5. <b>nginx/</b> folder:
  <br>It stores some configurations for running project with nginx.

- 2.6. <b>build/</b> folder:
  <br>It stores sources of project after building.

- 2.7. <b>public/</b> folder:
  <br>It stores sources (css, data-resoures, fonts, images, locales)of project after building at the develop environment.  
    
- 2.8. <b>script/</b> folder:
  <br>It includes files using to build and start project.

- 2.9. <b>src/</b>
<br>This is the main folder in project. You can develop anything in here. It separates to 5 sub-folders: <b>app/ , styles/ , locales/ , static/, data-resoures/ and index.js file </b> 
    - 2.9.1 <b>index.js file</b>
    <br>This is the first file called from server after running project. All threads of project will begin from here.

    - 2.9.2. <b>app/</b> folder
    <br>This includes all js-sources of project. It has <b>App.js</b> file, which is a start-point to any process, and imported out of <b>index.js</b> to run project.
  
    - 2.9.3. <b>styles/</b> folder
    <br>Folder stores all of resources SASS. 
    - Sources formatting CSS is in the <b>common/</b> sub-folder. They associate with <b>variables/</b> to build several CSS skin-themes.
    - <b>skins/</b> folder where main-sass sources. They are built to css resources using in project.
    
    - 2.9.4. <b>locales/</b> folder
    <br>Folder stores all languages.
 
    - 2.9.5. <b>static/</b> folder
    <br>Folder stores build svn version .
    
    - 2.9.6. <b>data-resoures/</b> folder
    <br>Folder stores all component template of the react component.
    
# 3. MobX - Basic knowledge and how to apply to this project
  ### Sample 1: Create a local store
  - To define a new store
  ```
    import { observable } from 'mobx';
    import { action } from 'mobx';
    
    class StoreName {
        @observable status = 'A';
        @action changeStatus(newStatus) {
            this.status = newStatus;
        }
    }
    const store = new StoreName();
    export default store;
  ```
  - To use this store:
  ```
      import { observer } from 'mobx-react';
      import React, { Component } from "react"
      import store from './StoreName';
      
      @observer
      class Example extends Component {
          render() {
              return (
                  <div>
                      
                      <select onChange = {this.onChange.bind(this)}>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                      </select>
                      <br/>
                      status: {store.status}
                  </div>
                  
              )
          }
          onChange(e) {
              store.changeStatus(e.target.value);
          }
      }
      export default Example;
  ```
  ### Sample 2: Apply global store to child components using Provider.
  - To define a new store:
  ```
    import { observable } from 'mobx';
    import { action } from 'mobx';
    
    class StoreName {
        @observable status = 'B';
        @action changeStatus(newStatus) {
            this.status = newStatus;
        }
    }
    const store = new StoreName();
    export default store;
  ```
  - For parent component:
  ```
    import { observer, Provider } from 'mobx-react';
    import React, { Component } from "react"
    import store from './StoreName';
    import ChildComponent from './ChildComponent';
    
    @observer
    class ExampleSample2 extends Component {
        render() {
            return (
                <Provider store={store}>
                  <ChildComponent />
                </Provider>
              )
        }
        
    }
    export default ExampleSample2;
  ```
  - For child component: 
  ```
      import { observer, inject } from 'mobx-react';
      import React, { Component } from "react"
      
      @inject('store')
      @observer
      class ChildComponent extends Component {
          render() {
              return (
                  <div>
                      <select onChange = {this.onChange.bind(this)} value = {this.props.store.status}>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                      </select>
                      <br/>
                      status: {this.props.store.status}
                  </div>
              )
          }
      
          onChange(e) {
              this.props.store.changeStatus(e.target.value);
          }
      }
      export default ChildComponent;
  ```
  #### View example: https://mobx.js.org/getting-started.html

  #### View more detail: https://mobx.js.org/
  
  # 4. Internationalization
  To make the i18next configuration available in all our components we have to wrap the App component with I18nextProvider (src/index.js). It  automatically adds the t() function to the properties of a component.
  - Structure of locales:
  ```
      |   |   +---de
      |   |   |       default.json     // contains key default for project such as title header  
      |   |   |       dashboard.json   // key translate for the dashboard page
      |   |   +---en
      |   |   |       default.json
      |   |   |       dashboard.json   // key translate for the dashboard page
  ```
  - 4.1. <b>default</b>:
    <br>It stores some key default for project such as title header
  
  - 4.2. <b>dashboard</b>:
    <br>It stores some key translate for the dashboard page

  ### Demo: Showing the translation on the component.
  ```
  import React, {Component} from 'react';
  import {withTranslation} from 'react-i18next';
  
  @withTranslation()
  class SampleTranslate extends Component {
      constructor(props) {
          super(props);
      }
  
      translate = (key) => {
          return this.props.t(key)
      }
  
      render() {
          return (
              <>
                  {this.translate('dashboard:Quick Summary')} <br/>
                  {this.translate('pa.pageTitle')}
              </>
          )
      }
  }
  
  export default SampleTranslate;
  ```
### Note: 
  - This project's using react-i18next 11 version. So, we will declare @withTranslation() decorator on the top class.
  - This project's setting the 'default' namespaces for i18n. (Ref : i18nConfiguration.js)<br/>
     + So while the translation from the defined default namespace:<br/>
     {this.translate('pa.pageTitle')}<br/>
     + This will lookup the key in a namespace (file) called dashboard.json:<br/>
     {this.translate('dashboard:Quick Summary')}<br/>

### View more: 

Add-or-load-translations: https://www.i18next.com/how-to/add-or-load-translations

Interpolation: https://www.i18next.com/translation-function/interpolation#all-interpolation-options

Use I18n: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next

# 5. Working with SASS
  - Structure of scss:
  ```
    \---skins 
    |           +---commons
    |           |   +---abstracts
    |           |   |   +---mixins     
    |           |   |   \---variables       
    |           |   +---base      
    |           |   +---components  
    |           |   +---layouts  
    |           |   +---placeholders      
    |           |   \---vendors                
    |           +---pa
    |           |   +---abstracts
    |           |   |   +---mixins     
    |           |   |   \---variables        
    |           |   +---components
    |           |   +---layouts     
    |           |   \---placeholders
    |           +---pinbet88
    |           |   +---abstracts
    |           |   |   +---mixins     
    |           |   |   \---variables        
    |           |   +---components
    |           |   +---layouts     
    |           |   \---placeholders
    |           +---compress_pa.scss
    |           +---compress_pinbet88.scss
  ```
- 5.1. <b>abstracts</b>:
  <br>It stores some mixins and variables

- 5.2. <b>base</b>:
  <br>It stores some base scss

- 5.3. <b>components</b>
  <br>It stores some scss of component react
  
- 5.4. <b>layouts</b> folder:
  <br>It stores some scss of body, footer...
  
- 5.5. <b>placeholders/</b> folder:
  <br>It stores some placeholders of scss

- 5.6. <b>vendors</b> folder:
  <br>It stores scss of external lib.
  
- 5.7. <b>compress file</b> folder:
  <br>Auto generate when build gulp, Using for build scss which it is contains all the path scss files. Don't commit it

### Note: 
  - This project use gulp to build scss to css:
    + Step 1: Import all the path scss file into the compress file which is belong to the skin.
    + step 2: Using the gulp-sass compile to css. After that, using the gulp-rename change file to pa.min.css or pinbet88.min.css
  - Path of the css file after compile
  ```
    +---public  
    |       +---css
    |       |       pa.min.css
    |       |       pinbet88.min.css
    |       |
  ```
# 6. Loading component from json file
  - Structure of component json:
  ```
    |   +---data-resoures
    |   |   \---template-layout
    |   |       +---pa
    |   |       |   +---components
    |   |       |   |       DashBoardPageComponent.json
    |   |       |   |       
    |   |       |   +---global
    |   |       |   |       appInfos.json
    |   |       |   |       cssFiles.json
    |   |       |   |       
    |   |       |   \---template
    |   |       |       +---bodyContainer
    |   |       |       |   \---dashBoardPage
    |   |       |       |           leftContainer.json
    |   |       |       |           mainContainer.json
    |   |       |       |           rightContainer.json
    |   |       |       |           topContainer.json
    |   |       |       |           
    |   |       |       +---footerContainer
    |   |       |       |       formal.json
    |   |       |       |       
    |   |       |       \---headerContainer
    |   |       |               formal.json
    |   |       |               
    |   |       \---pinbet88
    |   |           +---components
    |   |           |       DashBoardPageComponent.json
    |   |           |       
    |   |           +---global
    |   |           |       appInfos.json
    |   |           |       cssFiles.json
    |   |           |       
    |   |           \---template
    |   |               +---bodyContainer
    |   |               |   \---dashBoardPage
    |   |               |           leftContainer.json
    |   |               |           mainContainer.json
    |   |               |           rightContainer.json
    |   |               |           topContainer.json
    |   |               |           
    |   |               +---footerContainer
    |   |               |       formal.json
    |   |               |       
    |   |               \---headerContainer
    |   |                       formal.json
    |   |                       
  ```
- 6.1. <b>components</b>:
  <br>It stores all component for page

- 6.2. <b>global</b>:
  <br>It stores some info css, global info application

- 6.3. <b>bodyContainer</b>
  <br>It stores body all pages
  
- 6.4. <b>footerContainer</b> folder:
  <br>It stores some info about footer
  
- 6.5. <b>headerContainer/</b> folder:
  <br>It stores some info about header
### Note: 
  - This project use gulp-merge to combine multi json file.
  - Path of the template-layout after merge json file
  ```
+---public      
|       +---data-resoures
|       |   \---template-layout
|       |           pa.json
|       |           pinbet88.json 
  ```

# 7. Define API services in Project
- Default config (header's params, request's params) of requests are defined in `\src\app\common\RestApiInstance.js`. For adding different Interceptors for different requests, we can create many RestApi instances (by using axios.create)
- All API URLs are defined in `src\app\common\api-urls` 
- Services call API are defined in `\src\app\services`
### Demo: See the code in src\app\services\UserServices.js
```
import APIs from '../common/APIs'
import defaultRestApi from '../common/RestApiInstance'

export default class UserServices {
    static getUserDataInfo = () => {
        return defaultRestApi.get(APIs.getUserDataInfo(), {
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => {
        });
    }
}
```

### View more: 
Using Axios with React: https://alligator.io/react/axios-react/

# 8. Integrate to backoffice project
- Open backoffice-portal project, goto src/main/webapp/WEB-INF/components/m-affiliate-management.jsp and add the 'Affiliate Dashboard Management' sub-menu for  the 'Affiliate Management' menu
```
<auth:authorization anyPermissions="AFFILIATE_LISTING">
    <li class="" id="aa22">
        <a href="/bo-affiliate/dashboard" target="iContent">
            ${T["Affiliate Dashboard Management"]}
        </a>
    </li>
</auth:authorization>
```
# 9. Nginx config and Run project
## 9.1 Nginx config
 - Get the nginx-dev.conf file from this project to refer some parameters and update to nginx.conf of your nginx.
 ```
server {
		listen       9898;
		server_name  localhost;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-Host $host;
		proxy_set_header X-Forwarded-Server $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Real-IP  $remote_addr;
		proxy_buffering off;		
		proxy_cookie_domain ~\.oreo88\.com$ $host;
		#this key will be gen base on server
		add_header Set-Cookie "fp=0xa157e1aaf33d2e4c1c52671e200807ed.0x366dec086a131e75e32f5c9d24367ddc.0xbffb5c2e03933b768b5b62e8be77debc; Path=/";
		#charset koi8-r;

		#access_log  logs/host.access.log  main;
		
		# for node socket
		location /sockjs-node {
			proxy_set_header X-Real-IP  $remote_addr;
			proxy_set_header X-Forwarded-For $remote_addr;
			proxy_set_header Host $host;

			proxy_pass "http://localhost:3003"; 

			#proxy_redirect off;

			proxy_http_version 1.1;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection "upgrade";
		}
		
		location /backoffice/ {
			proxy_set_header   X-Forwarded-For $remote_addr;
			proxy_set_header   Host $http_host;
			proxy_pass		"http://localhost:8080/backoffice/";
		}
		
		location /bo-affiliate/ {
			proxy_set_header   X-Forwarded-For $remote_addr;
			proxy_set_header   Host $http_host;
			proxy_pass "http://localhost:3003/";
		}
        
		location / {
			proxy_set_header   X-Forwarded-For $remote_addr;
			proxy_set_header   Host $http_host;
			proxy_pass         "http://localhost:3003/";
		}
		location /affiliate-manager/ {
			proxy_set_header   X-Forwarded-For $remote_addr;
			proxy_set_header   Host $http_host;
			proxy_pass		"http://localhost:8080/affiliate-manager/";
		}
	}
 ```
## 9.2 Run project
1. Start Nginx server (default port 9898)
2. Start Nodejs server (default port 3003, Can change port at the bo-affiliate-ui\scripts\start.js)
3. Open web browser with url: http://your_ip:9898/backoffice and login
4. Access to affiliate dashboard url: http://your_ip:9898/backoffice/web/index#/bo-affiliate/dashboard

# 10. Note commit in project
### Don't commit these path folder and file in the project. Because, they will auto generate when build<br/>
 \bo-affiliate-ui\public\css <br/>
 \bo-affiliate-ui\public\data-resoures <br/>
 \bo-affiliate-ui\public\locales <br/>
 \bo-affiliate-ui\build<br/>
 \bo-affiliate-ui\src\styles\skins\compress_pa.scss <br/>
 \bo-affiliate-ui\src\styles\skins\compress_pinbet88.scss <br/>
 \bo-affiliate-ui\package-lock.json


 deploy github page: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
 


