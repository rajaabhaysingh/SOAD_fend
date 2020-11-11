import React from 'react';
import "../../styles/publicpages.css"
import mans from "../../images/man.jpg"
const Profile = () => {
  return(
    <div>
      <div className="container-fluid">
                <h3 className="text-dark mb-4">Profile Overview</h3>
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div className="card mb-3">
                            <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={mans} alt="avatarimage" width="160" height="160" />
                                <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary font-weight-bold m-0">Skills</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Web Application Development<span className="float-right">20%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-danger w-25" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">20%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Social Media Marketing<span className="float-right">40%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-warning w-40" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">40%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Cloud Computing<span className="float-right">60%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-primary w-60  w-50" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">60%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Machine Learning and AI<span className="float-right">80%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-info w-80" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">80%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Competitive Coding<span className="float-right">100%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-success w-100" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">100%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-3">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 font-weight-bold">User Details</p>
                                    </div>
                                    <div className="card-body">
                                        <form >
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label for="username"><strong>Username</strong></label><input className="form-control" type="text" placeholder="user.name" name="username" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label for="email"><strong>Email Address</strong></label><input className="form-control" type="email" placeholder="user@example.com" name="email" /></div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label for="first_name"><strong>First Name</strong></label><input className="form-control" type="text" placeholder="John" name="first_name" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label for="last_name"><strong>Last Name</strong></label><input className="form-control" type="text" placeholder="Doe" name="last_name" /></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 font-weight-bold">Contact Details</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group"><label for="address"><strong>Address</strong></label><input className="form-control" type="text" placeholder="Sunset Blvd, 38" name="address" /></div>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label for="city"><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label for="country"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country" /></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow mb-5">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 font-weight-bold">Send Me An Email</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="form-group"><label for="signature"><strong>Body</strong><br /></label><textarea className="form-control" rows="4" name="signature"></textarea></div>
                                    <div className="form-group">
                                        <div className="custom-control custom-switch"><input className="custom-control-input" type="checkbox" id="formCheck-1" /><label className="custom-control-label" for="formCheck-1"><strong>Notify me about new replies</strong></label></div>
                                    </div>
                                    <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Send Mail</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile; 