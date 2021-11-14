const { BookCategory, RecommendationRequest, RecommendationResponse } = require('./books_pb.js');
const { RecommendationsClient } = require('./books_grpc_web_pb.js');

var recommendationService = new RecommendationsClient('http://localhost:8080');

var request = new RecommendationRequest();
request.setUserId(1);
request.setCategory(BookCategory.MYSTERY);
request.setMaxResults(1);

booksService.Recommend(request, {}, function (err, response) {
  console.log(JSON.stringify(response));
});

export { recommendationService };