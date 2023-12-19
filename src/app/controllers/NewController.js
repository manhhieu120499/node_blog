class NewsController {
    // [GET] /news
    index(req, res) {
        res.render("news");
    }

    // [GET] /news/tin-tuc-24h
    show(req, res) {
        res.render("tin-tuc-24h");
    }
}

module.exports = new NewsController();
