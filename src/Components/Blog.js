import React, { Component } from 'react';

class Blog extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.blogmessage;
    }

    return (
      <section id="blog">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   
			   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title"></h4>
                  <ul id="twitter">
                     <li>
                        
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Blog;
