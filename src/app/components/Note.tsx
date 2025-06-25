import React from 'react';

const Note = () => {
    return (
        <div>
           (((((((()))))))) Take Notes ((((((((((()))))))))))
           <h2> React Server Components is a new architecture introduced
            by the React team which was embraced by Next.js
           </h2>
           <h3>The architecture introduces a new way of creating React components, 
            spliting them in two types:
           </h3>
           - Server components
           - Client components
           This distinction is not base on the functionality of the component
           but the specify environment to which they are design to interact with
           <div>
            <h3>Server Components</h3>
            <div>
                -rendered exclusively on the Server
                -never sent to the Client
                - faster page loads
                -cant use interactivity features like useState or useEffect
                -server components are the default  
                = fetching data 
                = accessing backend resources
                = keeping sensitive information on the server         

            </div>
            <h3>Client Component</h3>
            <div>
                - rendered in the browser
                - rendered to HTML once on the Server 
                - immediately see the pages HTML content rather than a blank screen 
                - can use state, effects and browser-only APIs 
                - add use Client directive at the top of your file
                = interactivity and event listeners
                = using hooks like useState or useEffect 
                
           </div>
           <div>
             <h2>Routing</h2>
             <p>Next.js has a file-system based routing mechanism</p>
             <p>The way you organize your files and folders determines the routes of your
                application
             </p>
             <h3>Routing conventions:</h3>
             <div>
                - all routes must be placed inside the app folders
                - every file that  represents a route should be named
                page.js or page.tsx 
                - every folder corresponds to a path segment in the browser URL
             </div>
           </div>
            <h2>Data Fetching</h2>
           <div>
            <p>Server components are the preferred choice for data fetching in Next.js</p>
            <ul>
                <li>+ reduced bundle size</li>
                <li>+ lower latency</li>
                <li>+ improved SEO</li>
                <li>+ direct access to backend resources</li>
                <li>+ and the ability to secure sensitive data</li>
            </ul>
            <p>NB: Opt for client components for data fetching only when its absolutely necessary,
                such as when real-time update or when the data depends on client-side interactions
                that cant be predicted server-side
            </p>
           </div>
           <div>
            <h1>Route Groups: we use (foldername) to group routes</h1>
           </div>
        </div>
        </div>
    );
}

export default Note;
