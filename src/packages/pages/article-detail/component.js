import React, { Component } from 'react';

import './style.css';

import Comment from '../../widgets/comment/component';

class ArticleDetail extends Component {
    render() {
        return (
            <div className="article-detail">
                <div className="article-detail__title">
                    My New App
                </div>
                <div className="article-detail__main-image">
                    <img src="https://cdn.dribbble.com/users/88761/screenshots/2188026/dribbble_shot.png" alt="" />
                </div>
                <div className="article-detail__body">
                    <p>It's time to get back on the track! 
                        And let's start with a cool project I recently completed with Humdinger and Sons :
                        Krono is a super simple, real-time slo-mo and accelerated video tool for iPhone. Check it out guys :)
                    </p>
                    <p>When does a project need React? That’s the question Chris Coyier addressed in a recent blog post. 
                        I’m a big fan of Chris’ writing, so I was curious to see what he had to say.In a nutshell, Chris puts forward a series of good and bad reasons why one might want to use React (or other similar modern JavaScript libraries) on a project. Yet while I don’t disagree with his arguments, I still find myself coming to a different conclusion.
                        So today, I’m here to argue that the answer to “When does a project need React?” is not “it depends.” It’s “every time.”
                    </p>
                    <h3>The Complexity Spectrum</h3>
                    <p>
                        First, let’s address the most common argument against the “React all the things!” approach. I’ll quote directly from Chris:
                        “A blog, for example, probably has none of the problems and fits none of the scenarios that would make React a good fit. And because it’s not a good fit, it’s probably a bad fit, because it introduces complicated technology and dependencies for something that doesn’t call for it.”
                        Fair enough. A simple blog doesn’t need React. After all, even if you need a bit of JavaScript to hook up a newsletter sign-up form, you can just use jQuery.
                        What’s that? You need to use that form in multiple places on different pages? And only show it under certain conditions? And animate it, too? Wait, hold on…
                        The point I’m trying to make with this little scenario is that complexity is not an all-or-nothing, binary choice. Instead, modern websites live on a continuous spectrum that goes from static page all the way to rich single-page app.
                        So maybe your project is comfortably nested at the “simple” end of the spectrum now, but what about six months down the road? Isn’t it better to pick a technology that leaves you room to grow, rather than one that pigeon-holes you into bad practices?
                        The Benefits of React
                        “Premature optimization is the root of all evil” — Donald Knuth
                        This is another popular saying among programmers. After all, who needs hammers and nails when duct tape will do just fine!
                        But this makes the assumption that “premature optimization” is a long, arduous process with few benefits. And I don’t think this applies to React.
                        While React may take some time getting used to, once you learn its basic concepts you’ll be just as productive as with classic front-end tools.
                        Maybe more in fact, because React leverages the extremely powerful concept of components. Just like CSS encourages you to think in terms of reusable classes and styles, React pushes you towards a flexible, modular front-end architecture that has benefits for every use case, from the lowly static homepage to the interactive back-end dashboard.
                    </p>
                </div>
                <div className="article-detail__publish-date">
                    May 19, 2017
                </div>
                <div className="article-detail__comments">
                    <h3>Comments</h3>

                    <Comment
                        message="Hi~ my name is chorong. I leave my message to contact with you. please message me~"
                        date="May 20, 2017"
                        commenter="Chorong"
                    />
                </div>
            </div>
        );
    }
}


export default ArticleDetail;
