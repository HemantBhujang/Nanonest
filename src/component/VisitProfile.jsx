// UserProfile.js
import React from 'react';
const VisitProfile = () => {
       return (
        <div className="container mt-5">
            <h1 className="text-center">'s Profile</h1>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">Personal Information</h5>
                    <p className="card-text"><strong>Age:</strong> </p>
                    <p className="card-text"><strong>Email:</strong> </p>
                    <Link to="/" className="btn btn-primary">Back to User List</Link>
                </div>
            </div>

            <h2 className="mt-5">Posts</h2>
            <div className="list-group mt-3">
                {user.posts.map(post => (
                    <div key={post.id} className="list-group-item">
                        <h5 className="mb-1"></h5>
                        <p className="mb-1"></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisitProfile;
