$("charity_profile.html").ready(
    function(){
        // alert("work");
        $("#form-content").hide();
        $("#open-form").click(
            function(){
                $(this).hide();
                $("#form-content").fadeIn("slow");
                $(".charity-form").css("background-color", "rgba(0, 0, 0, 0.5)")
            }
        );
        
        $("#form-content").submit(function(){
            alert('Succesfully signed up!');
        });
});