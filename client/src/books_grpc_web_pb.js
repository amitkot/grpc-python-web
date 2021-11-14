/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./books_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.RecommendationsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.RecommendationsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RecommendationRequest,
 *   !proto.RecommendationResponse>}
 */
const methodDescriptor_Recommendations_Recommend = new grpc.web.MethodDescriptor(
  '/Recommendations/Recommend',
  grpc.web.MethodType.UNARY,
  proto.RecommendationRequest,
  proto.RecommendationResponse,
  /**
   * @param {!proto.RecommendationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RecommendationResponse.deserializeBinary
);


/**
 * @param {!proto.RecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.RecommendationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RecommendationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.RecommendationsClient.prototype.recommend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Recommendations/Recommend',
      request,
      metadata || {},
      methodDescriptor_Recommendations_Recommend,
      callback);
};


/**
 * @param {!proto.RecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RecommendationResponse>}
 *     Promise that resolves to the response
 */
proto.RecommendationsPromiseClient.prototype.recommend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Recommendations/Recommend',
      request,
      metadata || {},
      methodDescriptor_Recommendations_Recommend);
};


module.exports = proto;

