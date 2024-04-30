let comments = [];

        function renderComments() {
            $("#comments-container").empty();
            comments.forEach((comment, index) => {
                let $comment = $(`
                
                    <div class="comment" data-index="${index}">
                    <div class="profpic"> <img src="${comment.defaultProfilePic}" alt="profile picture" class="profilePicture"></div>
                    <div class="comment-content">
                    <div class="comment-header">
                            <span class="username">${comment.displayName}</span>
                            <div class="comment-actions">
                                <button class="delete-comment">Delete</button>
                                <button class="edit-comment">Edit</button>
                            </div>
                        </div>
                        <div class="comment-body">${comment.text}</div>
                        
                    </div>
                `);
                $("#comments-container").append($comment);
            });
        }

        function addComment(displayName, text, defaultProfilePic) {
            comments.unshift({ displayName, text, defaultProfilePic });
            renderComments();
        }

        function editComment(index, newText) {
            comments[index].text = newText;
            renderComments();
        }

        function deleteComment(index) {
            comments.splice(index, 1);
            renderComments();
        }

        $(document).ready(() => {
           // Create
    $("#comment-button").click(() => {
        const username = $("#username-input").val();
        const text = $("#comment-input").val();
        const defaultProfilePic = "defaultProfilepic.jpg";
        addComment(username, text, defaultProfilePic);
        $("#username-input").val("");
        $("#comment-input").val("");
    });

            // Edit 
            $(document).on("click", ".edit-comment", function() {
                const $comment = $(this).closest(".comment");
                const index = $comment.data("index");
                const newText = prompt("Enter new comment:");
                if (newText !== null) {
                    editComment(index, newText);
                }
            });

            // Delete
            $(document).on("click", ".delete-comment", function() {
                const index = $(this).closest(".comment").data("index");
                deleteComment(index);
            });
        });