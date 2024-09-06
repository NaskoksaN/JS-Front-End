function printUserComments(input){
    const users={};
    const articleList=[];
    for (const line of input) {
        //console.log(line);
        if(line.includes('user') && line.startsWith('user')){
            const tokens = line.split(' ');
            const userName = tokens.slice(1).join(' ');
            users[userName]=userName;
        } else if(line.includes('article') && line.startsWith('article')){
            const tokens = line.split(' ');
            const article = tokens.slice(1).join(' ');
            articleList[article]=[];
        }else if(line.includes('posts on')) {
            const [leftPart, rightPart] = line.split(': ');
            const [userName, articleName] = leftPart.split(' posts on ');
            const [commentTitle, commentContent] = rightPart.split(', ');
            if(users.hasOwnProperty(userName) && articleList.hasOwnProperty(articleName)){
                const tempObj ={
                    userName,
                    commentContent,
                    commentTitle
                };
                articleList[articleName].push(tempObj);
            }
        }
    }
    function countComments(articles){
        const obj={}

        const temp = Object.entries(articles);
        for (const [artName, commArr] of temp) {
            const countComment = commArr.length;
            obj[artName]=countComment;
        }
        return obj;
    }
    const articleAnCommentsCount = Object.entries(countComments(articleList))
        .sort(([, sizeA], [, sizeB]) => sizeB - sizeA);
    
    for (const [name, count] of articleAnCommentsCount) {
        console.log(`Comments on ${name}`);
        const articleCollection = Object.entries(articleList[name]);
        articleCollection.sort(([, a], [, b]) => a.userName.localeCompare(b.userName));
        for (const [key, value] of articleCollection) {
            console.log(`--- From user ${value.userName}: ${value.commentTitle} - ${value.commentContent}`);
        }
    }
    
}

printUserComments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
//printUserComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);