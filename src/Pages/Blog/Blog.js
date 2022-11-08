import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Difference between SQL and NoSQL</h1>
            <div className="collapse">
                <input type="checkbox" />

                <div className="collapse-title text-xl font-medium">
                    Show Answere
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;