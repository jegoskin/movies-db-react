class Movie {
	constructor(dbEntity) {
		this.id = dbEntity.id;
		this.name = dbEntity.name;
		this.description = dbEntity.description;
		this.rating = dbEntity.rating;
	}
	json() {
		let result = {
			name: this.name,
			description: this.description,
			rating: this.rating
		}
		if (this.id) result.id = this.id;
		return result;
	}
}
export default Movie;