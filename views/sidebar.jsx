var React = require('react');

function Sidebar(props) {
    const sidebar = () => (
        props.sidebar.slice(0, props.sidebar.search('<li class="nav-group active">'))
            .replace(/href="/g, 'href="https://developer.swedbankpay.com')
    )
  return (
      <div className="col-xxl-2 col-lg-3 pr-0 border-right">
        <div className="sidebar dg-sidebar">
            <nav className="sidebar-nav">
                <a href="/" class="sidebar-header ">
                    <img src="https://design.swedbankpay.com/v/5.0.1/img/swedbankpay-logo-v.svg" alt="Swedbank Pay vertical logo" class="logotype-vertical logotype-lg" />
                    <div class="sidebar-header-text mt-2">
                         <span>{"{"}</span>developer portal<span>{"}"}</span>
                     </div>
                </a>
                <form className="search-form mx-2 my-4 px-3 py-2 d-flex" method="get" action="/search">
                    <input
                        name="q"
                        type="text"
                        className="search-input w-100"
                        placeholder="Search in documentation"
                        onfocus="this.placeholder=''"
                        onblur="this.placeholder='Search in documentation'"
                        required
                        pattern=".{3,}"
                        title="At least 3 characters" />
                    <button className="submit-form-btn mb-0">
                        <i className="material-icons m-0" aria-hidden="true">search</i>
                    </button>
                </form>
               
                <ul dangerouslySetInnerHTML={{ __html: sidebar()}} id="dx-sidebar-main-nav-ul" className="main-nav-ul">
                </ul>
            </nav>
        </div>
      </div>
  );
}

module.exports = Sidebar;