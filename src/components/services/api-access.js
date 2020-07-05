import axios from 'axios';

const APIAccess = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// class APIAccess {
//   constructor() {
//     this.APIAccess = axios.create({
//       baseURL: process.env.REACT_APP_API_URL,
//       withCredentials: true,
//     });
//   }

//   // global endpoints

//   uploadFile(theFile) {
//     return this.APIAccess.post('/picture/upload', theFile).then(res => res);
//   }

//   // business endpoints

//   getAllBusinesses() {
//     return this.APIAccess.get('/allbusiness').then(response => response);
//   }

//   getOneBusiness(businessId) {
//     return this.APIAccess.get(`/business/${businessId}`).then(response => response);
//   }

//   createBusiness(name, address, postcode, coordinates, profilePicture, menu) {
//     return this.APIAccess.post('/addbusiness', { name, address, postcode, coordinates, profilePicture, menu }).then(response => response);
//   }

//   // users endpoints

//   getAllUsers() {
//     return this.APIAccess.get('/allusers').then(response => response);
//   }

//   getOneUser(userId) {
//     return this.APIAccess.get(`/user/${userId}`).then(response => response);
//   }

//   // discounts endpoints

//   getAllDiscounts() {
//     return this.APIAccess.get('/discounts').then(response => response);
//   }

//   getOneDiscount(discountId) {
//     return this.APIAccess.get(`/discount/${discountId}`).then(response => response);
//   }

//   editDiscount(discountId, businessId, userId) {
//     return this.APIAccess.put(`/discount/${discountId}`, { businessId, userId }).then(response => response);
//   }

//   addDiscount(owner, title, description, picture, expiration) {
//     return this.APIAccess.post('/adddiscount', { owner, title, description, picture, expiration }).then(response => response);
//   }

//   // reviews endpoints

//   getAllReviews() {
//     return this.APIAccess.get('/reviews').then(response => response);
//   }

//   getOneReview(reviewId) {
//     return this.APIAccess.get(`/review/${reviewId}`).then(response => response);
//   }

//   addReview(userId, business, title, review, media, rating) {
//     return this.APIAccess.post(`/user/${userId}/addreview`, { business, title, review, media, rating }).then(response => response);
//   }

//   // rating endpoints

//   getAllRatings() {
//     return this.APIAccess.get('/ratings').then(response => response);
//   }

//   getOneRating(ratingId) {
//     return this.APIAccess.get(`/rating/${ratingId}`).then(response => response);
//   }

//   addRating(userId, business, cleanliness, space, materials, individualPackages, capacity, waiters, procedures, children, ventilation, clients, average) {
//     return this.APIAccess.post(`/user/${userId}/addrating`, { business, cleanliness, space, materials, individualPackages, capacity, waiters, procedures, children, ventilation, clients, average }).then(response => response);
//   }


//   // auth - social login endpoints


// }

export default APIAccess;