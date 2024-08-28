const express = require('express');
const app = express();
const port = 3000;

let profiles = [
    { name: 'Alice', role: 'admin', dateJoined: '2021-01-15' },
    { name: 'Bob', role: 'user', dateJoined: '2021-03-22' },
    { name: 'Charlie', role: 'guest', dateJoined: '2021-02-10' },
    { name: 'David', role: 'admin', dateJoined: '2021-05-30' },
    { name: 'Eve', role: 'user', dateJoined: '2021-04-18' }
];

app.use(express.static('public'));

app.get('/profiles', (req, res) => {
    const { role, sortBy } = req.query;

    let filteredProfiles = profiles;

    if (role && role !== 'all') {
        filteredProfiles = profiles.filter(profile => profile.role === role);
    }

    if (sortBy) {
        filteredProfiles.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'date') {
                return new Date(a.dateJoined) - new Date(b.dateJoined);
            }
        });
    }

    res.json(filteredProfiles);
});

//app.listen(port, () => {
 //   console.log(Server is running at http://localhost:${port});
//});