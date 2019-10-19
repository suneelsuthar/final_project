import React from 'react'
import './dashboard.css'
// import avatar from './../../img/admin.png'
// import star from './../../img/star.png'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
export default class Dashboard extends React.Component{
  constructor(){
    super()
    this.state={
      sidebar:true
    }
  }
    render(){
      return (
        <div>

        
          
         
          <header className="header">

            <nav  className="navbar navbar-expand-lg px-4 py-2" style={{backgroundColor:"hsl(174, 63%, 45%)"}} ><a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
              {/* <i className="fas fa-align-left" /> */}
              <FormatAlignJustifyIcon style={{fontSize:"30px",color:"black"}} onClick={()=>this.setState({sidebar: !this.state.sidebar })} />
              
              </a>
                  {/* <img src={star} style={{marginTop:30,position:"absolute",marginLeft:"45%"}} /> */}
              <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                <li className="nav-item">

                  <form id="searchForm" className="ml-auto d-none d-lg-block">
                    <div className="form-group position-relative mb-0">
                      <button type="submit" style={{top: '-3px', left: 0}} className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg" /></button>
                      <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                    </div>

                  </form>
                </li>
                <li className="nav-item dropdown mr-3"><a id="notifications" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell" style={{fontSize:"24px",marginLeft:"50px"}} /><span className="notification-icon" /></a>
                  <div aria-labelledby="notifications" className="dropdown-menu"><a href="#" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter" /></div>
                        <div className="text ml-2">
                          <p className="mb-0">You have 2 followers</p>
                        </div>
                      </div></a><a href="#" className="dropdown-item"> 
                      <div className="d-flex align-items-center">
                        <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope" /></div>
                        <div className="text ml-2">
                          <p className="mb-0">You have 6 new messages</p>
                        </div>
                      </div></a><a href="#" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload" /></div>
                        <div className="text ml-2">
                          <p className="mb-0">Server rebooted</p>
                        </div>
                      </div></a><a href="#" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter" /></div>
                        <div className="text ml-2">
                          <p className="mb-0">You have 2 followers</p>
                        </div>
                      </div></a>
                    <div className="dropdown-divider" /><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
                  </div>
                </li>
                <li className="nav-item dropdown ml-auto">
                  <a id="userInfo" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                    {/* <img src={avatar} alt="Jason Doe" style={{maxWidth: '2.5rem'}} className="img-fluid rounded-circle shadow" /> */}
                    </a>
                  <div aria-labelledby="userInfo" className="dropdown-menu"><a href="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">Mark Stephen</strong><small>Web Developer</small></a>
                    <div className="dropdown-divider" /><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log     </a>
                    <div className="dropdown-divider" /><a href="login.html" className="dropdown-item">Logout</a>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
          
          <div className="d-flex align-items-stretch">
            {this.state.sidebar ?
            <div id="sidebar" className="sidebar py-3">
              <div className="text-uppercase px-3 px-lg-4 py-4 font-weight-bold small" style={{color:"black"}}>SDF COLLEG MITHI</div>
              <ul className="sidebar-menu list-unstyled">
                <li className="sidebar-list-item"><a href="index.html" className="sidebar-link text-muted active"><i className="o-home-1 mr-3 text-gray" /><span>Home</span></a></li>
                <li className="sidebar-list-item"><a href="charts.html" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray" /><span>Charts</span></a></li>
                <li className="sidebar-list-item"><a href="tables.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray" /><span>Tables</span></a></li>
                <li className="sidebar-list-item"><a href="forms.html" className="sidebar-link text-muted"><i className="o-survey-1 mr-3 text-gray" /><span>Forms</span></a></li>
                <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray" /><span>Pages</span></a>
                  <div id="pages" className="collapse">
                    <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                      <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page one</a></li>
                      <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page two</a></li>
                      <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page three</a></li>
                      <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page four</a></li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-list-item"><a href="login.html" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray" /><span>Login</span></a></li>
              </ul>
              <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
              <ul className="sidebar-menu list-unstyled">
                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-database-1 mr-3 text-gray" /><span>Demo</span></a></li>
                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-imac-screen-1 mr-3 text-gray" /><span>Demo</span></a></li>
                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-paperwork-1 mr-3 text-gray" /><span>Demo</span></a></li>
                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray" /><span>Demo</span></a></li>
              </ul>
            </div>:
           <div></div> }



            <div className="page-holder w-100 d-flex flex-wrap">
              <div className="container-fluid px-xl-5">
                <section className="py-5">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                      <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-violet" />
                          <div className="text">
                            <h6 className="mb-0"><span style={{marginRight:5}}>XI</span>Medical</h6><span className="text-gray">145,14</span>
                          </div>
                        </div>
                        <div className="icon text-white bg-violet"><i className="fas fa-server" /></div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                      <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-green" />
                          <div className="text">
                            <h6 className="mb-0"><span style={{marginRight:5}}>XI</span>Engineering</h6><span className="text-gray">332</span>
                          </div>
                        </div>
                        <div className="icon text-white bg-green"><i className="far fa-clipboard" /></div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                      <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-blue" />
                          <div className="text">
                            <h6 className="mb-0"><span style={{marginRight:5}}>XII</span>Medical</h6><span className="text-gray">700</span>
                          </div>
                        </div>
                        <div className="icon text-white bg-blue"><i className="fa fa-dolly-flatbed" /></div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                      <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-red" />
                          <div className="text">
                            <h6 className="mb-0"><span style={{marginRight:10}}>XII</span>Engineering</h6><span className="text-gray">1423</span>
                          </div>
                        </div>
                        <div className="icon text-white bg-red"><i className="fas fa-receipt" /></div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row mb-4">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                      <div className="card">
                        <div className="card-header">
                          <h2 className="h6 text-uppercase mb-0">Current server uptime</h2>
                        </div>
                        <div className="card-body">
                          <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <div className="chart-holder">
                            <canvas id="lineChart1" style={{maxHeight: '14rem !important'}} className="w-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row align-items-center flex-row">
                            <div className="col-lg-5">
                              <h2 className="mb-0 d-flex align-items-center"><span>86.4</span><span className="dot bg-green d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">Work hours</span>
                              <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                            </div>
                            <div className="col-lg-7">
                              <canvas id="pieChartHome1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="row align-items-center flex-row">
                            <div className="col-lg-5">
                              <h2 className="mb-0 d-flex align-items-center"><span>1.724</span><span className="dot bg-violet d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">Server time</span>
                              <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                            </div>
                            <div className="col-lg-7">
                              <canvas id="pieChartHome2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row align-items-center mb-3 flex-row">
                            <div className="col-lg-5">
                              <h2 className="mb-0 d-flex align-items-center"><span>86%</span><span className="dot bg-violet d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">Monthly Usage</span>
                              <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                            </div>
                            <div className="col-lg-7">
                              <canvas id="pieChartHome3" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="row align-items-center flex-row">
                            <div className="col-lg-5">
                              <h2 className="mb-0 d-flex align-items-center"><span>$126,41</span><span className="dot bg-green d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">All Income</span>
                              <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                            </div>
                            <div className="col-lg-7">
                              <canvas id="pieChartHome4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="card">
                        <div className="card-header">
                          <h2 className="h6 text-uppercase mb-0">Total Overdue</h2>
                        </div>
                        <div className="card-body">
                          <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <div className="chart-holder">
                            <canvas id="lineChart2" style={{maxHeight: '14rem !important'}} className="w-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-5">
                  <div className="row text-dark">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <div className="card rounded credit-card bg-hover-gradient-violet">
                        <div className="content d-flex flex-column justify-content-between p-4">
                          <h1 className="mb-5"><i className="fab fa-cc-visa" /></h1>
                          <div className="d-flex justify-content-between align-items-end pt-3">
                            <div className="text-uppercase">
                              <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                            </div>
                            <h4 className="mb-0">$417.78</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <div className="card rounded credit-card bg-hover-gradient-blue">
                        <div className="content d-flex flex-column justify-content-between p-4">
                          <h1 className="mb-5"><i className="fab fa-cc-mastercard" /></h1>
                          <div className="d-flex justify-content-between align-items-end pt-3">
                            <div className="text-uppercase">
                              <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                            </div>
                            <h4 className="mb-0">$124.17</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <div className="card rounded credit-card bg-hover-gradient-green">
                        <div className="content d-flex flex-column justify-content-between p-4">
                          <h1 className="mb-5"><i className="fab fa-cc-discover" /></h1>
                          <div className="d-flex justify-content-between align-items-end pt-3">
                            <div className="text-uppercase">
                              <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                            </div>
                            <h4 className="mb-0">$568.00</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="card mb-5 mb-lg-0">         
                        <div className="card-header">
                          <h2 className="h6 mb-0 text-uppercase">Transaction history</h2>
                        </div>
                        <div className="card-body">
                          <p className="text-gray mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                            <div className="left d-flex align-items-center">
                              <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-dropbox" /></div>
                              <div className="text">
                                <h6 className="mb-0 d-flex align-items-center"> <span>Dropbox Inc.</span><span className="dot dot-sm ml-2 bg-violet" /></h6><small className="text-gray">Account renewal</small>
                              </div>
                            </div>
                            <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-violet">
                              <h5>-$20</h5>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                            <div className="left d-flex align-items-center">
                              <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-apple" /></div>
                              <div className="text">
                                <h6 className="mb-0 d-flex align-items-center"> <span>App Store.</span><span className="dot dot-sm ml-2 bg-green" /></h6><small className="text-gray">Software cost</small>
                              </div>
                            </div>
                            <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-green">
                              <h5>-$20</h5>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                            <div className="left d-flex align-items-center">
                              <div className="icon icon-lg shadow mr-3 text-gray"><i className="fas fa-shopping-basket" /></div>
                              <div className="text">
                                <h6 className="mb-0 d-flex align-items-center"> <span>Supermarket.</span><span className="dot dot-sm ml-2 bg-blue" /></h6><small className="text-gray">Shopping</small>
                              </div>
                            </div>
                            <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-blue">
                              <h5>-$20</h5>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                            <div className="left d-flex align-items-center">
                              <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-android" /></div>
                              <div className="text">
                                <h6 className="mb-0 d-flex align-items-center"> <span>Play Store.</span><span className="dot dot-sm ml-2 bg-red" /></h6><small className="text-gray">Software cost</small>
                              </div>
                            </div>
                            <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-red">
                              <h5>-$20</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-violet" />
                          <div className="text">
                            <h6 className="mb-0">Completed cases</h6><span className="text-gray">127 new cases</span>
                          </div>
                        </div>
                        <div className="icon bg-violet text-white"><i className="fas fa-clipboard-check" /></div>
                      </div>
                      <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-green" />
                          <div className="text">
                            <h6 className="mb-0">New Quotes</h6><span className="text-gray">214 new quotes</span>
                          </div>
                        </div>
                        <div className="icon bg-green text-white"><i className="fas fa-dollar-sign" /></div>
                      </div>
                      <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <div className="dot mr-3 bg-blue" />
                          <div className="text">
                            <h6 className="mb-0">New clients</h6><span className="text-gray">25 new clients</span>
                          </div>
                        </div>
                        <div className="icon bg-blue text-white"><i className="fas fa-user-friends" /></div>
                      </div>
                      <div className="card px-5 py-4">
                        <h2 className="mb-0 d-flex align-items-center"><span>86.4</span><span className="dot bg-red d-inline-block ml-3" /></h2><span className="text-muted">Server time</span>
                        <div className="chart-holder">
                          <canvas id="lineChart3" style={{maxHeight: '7rem !important'}} className="w-100">    </canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-5">
                  <div className="row">
                    <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                        <div className="row">
                          <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">24<sup className="smaller text-gray font-weight-normal">Apr</sup></strong><img src="img/avatar-1.jpg" alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                            <h6 className="mb-0">Jason Maxwell</h6>
                          </div>
                          <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">User testing</div>
                            <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                          </div>
                        </div></a></div>
                    <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                        <div className="row">
                          <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">24<sup className="smaller text-gray font-weight-normal">Nov</sup></strong><img src="img/avatar-2.jpg" alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                            <h6 className="mb-0">Sam Andy</h6>
                          </div>
                          <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Web Developer</div>
                            <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                          </div>
                        </div></a></div>
                    <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                        <div className="row">
                          <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">17<sup className="smaller text-gray font-weight-normal">Aug</sup></strong><img src="img/avatar-3.jpg" alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                            <h6 className="mb-0">Margret Peter</h6>
                          </div>
                          <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Analysis Agent</div>
                            <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                          </div>
                        </div></a></div>
                    <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                        <div className="row">
                          <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">15<sup className="smaller text-gray font-weight-normal">Sep</sup></strong><img src="img/avatar-4.jpg" alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                            <h6 className="mb-0">Jason Doe</h6>
                          </div>
                          <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">User testing</div>
                            <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                          </div>
                        </div></a></div>
                  </div>
                </section>
              </div>
              <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 text-center text-md-left text-primary">
                      <p className="mb-2 mb-md-0">Your company © 2018-2020</p>
                    </div>
                    <div className="col-md-6 text-center text-md-right text-gray-400">
                      <p className="mb-0">Design by <a href="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</a></p>
                      {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/* JavaScript files*/}
        </div>
      );
    }
  };