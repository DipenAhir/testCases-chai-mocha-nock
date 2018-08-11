var expect = require('chai').expect;
var nock = require('nock');
var getUserFollowers = require('../index').getUserFollowers;

describe('GET followers', function () {


    it('returns users followers', function (done) {
        var followersResponse = [{
            "login": "dipen",
            "id": 583231,
            "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
        },
        {
            "login": "dipen1",
            "id": 583231,
            "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
        },
        {
            "login": "dipen2",
            "id": 583231,
            "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
        }
        ];
        // Mock the TMDB configuration request response
        nock('https://api.github.com')
            .get('/users/rahul/followers')
            .reply(200, followersResponse);

            nock('https://api.github.com')
            .get('/users/dipen/followers')
            .reply(200, followersResponse);


        var username = 'rahul';

        getUserFollowers(username, function (err, followers) {
            console.log("followers : ", followers)
            // It should return an array object
            expect(Array.isArray(followers)).to.equal(true);
            // Ensure that at least one follower is in the array
            expect(followers).to.have.length.above(1);
            // Each of the items in the array should be a string
            followers.forEach(function (follower) {
                expect(follower).to.be.a('string');
            });
            done();
        });

    });
});