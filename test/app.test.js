import request from 'supertest'
import { app } from '../app'

describe('Test Get Survivors', () => {
	it('GET /survivors => ARRAY', () => {
		return request(app)
			.get('/survivors')
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							first_name: expect.any(String),
							age: expect.any(Number),
							reports: expect.any(Number),
						})
					])
				)
			})
	});
	it('GET /survivors/3 => ARRAY', () => {
		return request(app)
			.get('/survivors/3')
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						first_name: expect.any(String),
						age: expect.any(Number),
						reports: expect.any(Number),
					})
				)
			})
	});
})

it('GET /market => Object', () => {
	return request(app)
		.get('/market')
		.expect(200)
		.then((response) => {
			expect(response.body).toEqual(
				expect.objectContaining({
					water: expect.any(Number),
					food: expect.any(Number),
					medication: expect.any(Number),
					ammunition: expect.any(Number),
				})
			)
		})
});

it('REPORT => SURVIVOR', () => {
	return request(app)
		.post('/report/3')
		.then((response) => {
			expect(response.body).toEqual(
				expect.objectContaining({
					reports: expect.any(Number),
				})
			)
		})
});