import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col mx-8 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create an account!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <div className='flex justify-around mt-5'>
              <h3 className='text-xl font-bold'>Login with</h3>
              <img style={{height: "50px"}} src={`https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_google-512.png`} alt="" />
              <img style={{height: "45px"}} src={`https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_github-512.png`} alt="" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-green-500 to-blue-700 border-0">Login</button>
            </div>
            <h3 className="text-center">Already have an account? <span className="text-green-500 font-semibold"><Link to='/login'>Login</Link></span></h3>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;