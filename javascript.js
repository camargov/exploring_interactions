// Changing the title of the site 

d3.select("#title_tag").on("mouseover", function() {
    d3.select("title").html("explore happiness :)");
});
/* ***************************************************************** */
// Changing the background color of the site 

d3.select("#head_section").on("mouseover", function() {
    d3.select("html").style("background-blend-mode", "normal");
});

d3.select("#head_section").on("mouseout", function() {
    d3.select("html").style("background-blend-mode", "hue");
});



d3.select("#opening_body_tag").on("mouseover", function() {
    d3.select("html").style("background-blend-mode", "difference");
});

d3.select("#opening_body_tag").on("mouseout", function() {
    d3.select("html").style("background-blend-mode", "hue");
});



d3.select("#closing_body_tag").on("mouseover", function() {
    d3.select("html").style("background-blend-mode", "hard-light");
});

d3.select("#closing_body_tag").on("mouseout", function() {
    d3.select("html").style("background-blend-mode", "hue");
});
/* ***************************************************************** */
// Changing the title of the unordered list

d3.select("#unordered_list_title").on("mouseover", function() {
    d3.select(this).html("stay positive");
});

d3.select("#unordered_list_title").on("mouseout", function() {
    d3.select(this).html("h4");
});

/* ***************************************************************** */
// Changing the li text in the unordered list

d3.select("#li_1_unordered").on("mouseover", function() {
    d3.select(this).html("kindness is power");
});

d3.select("#li_1_unordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_2_unordered").on("mouseover", function() {
    d3.select(this).html("keep on swimming");
});

d3.select("#li_2_unordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_3_unordered").on("mouseover", function() {
    d3.select(this).html("just say yikes and move on");
});

d3.select("#li_3_unordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_4_unordered").on("mouseover", function() {
    d3.select(this).html("a beautiful day begins<br>a beautiful mindset");
});

d3.select("#li_4_unordered").on("mouseout", function() {
    d3.select(this).html("li");
});

/* ***************************************************************** */
// Changing the title of the ordered list

d3.select("#ordered_list_title").on("mouseover", function() {
    d3.select(this).html("you look great today");
});

d3.select("#ordered_list_title").on("mouseout", function() {
    d3.select(this).html("h4");
});
/* ***************************************************************** */
// Changing the li text in the ordered list

d3.select("#li_1_ordered").on("mouseover", function() {
    d3.select(this).html("you are strong");
});

d3.select("#li_1_ordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_2_ordered").on("mouseover", function() {
    d3.select(this).html("you got this");
});

d3.select("#li_2_ordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_3_ordered").on("mouseover", function() {
    d3.select(this).html("believe in yourself");
});

d3.select("#li_3_ordered").on("mouseout", function() {
    d3.select(this).html("li");
});



d3.select("#li_4_ordered").on("mouseover", function() {
    d3.select(this).html("you have the power within you");
});

d3.select("#li_4_ordered").on("mouseout", function() {
    d3.select(this).html("li");
});


