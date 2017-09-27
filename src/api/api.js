const DB = 'DB';

class Api {
	constructor() {
		let db = localStorage.getItem(DB);
		if (db) {
			this.data = JSON.parse(db);
		} else {
			this.data = [
				{id : 1, name: 'Matrix', description : 'Fantasy film ... atd.', rating: 10},
				{id : 2, name: 'Die Hard', description : 'Akní film ... atd.', rating: 8},
				{id : 3, name: 'Ice Age', description : 'Animovaný film ... atd.', rating: 3},
			];
		}
		this.lastId = this.data[this.data.length-1].id;
	}
	list() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.data);
			}, 500)
		})
	}
	insert(movieJson) {
		movieJson.id = ++this.lastId;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.data.push(movieJson);
				this._save();
				resolve();
			}, 250)
		})
	}
	_save() {
		window.localStorage.setItem(DB, JSON.stringify(this.data));
	}
	delete(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data.findIndex((item) => item.id == id);
				this.data.splice(index, 1);
				this._save();
				resolve(this.data);
			}, 250)
		})
	}
	get(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let item = this.data.find((item) => item.id == id);
				resolve(item);
			}, 250)
		})
	}
	edit(movieJson) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let index = this.data.findIndex(item => item.id == movieJson.id);
				this.data[index] = movieJson;
				this._save();
				resolve();
			}, 250)
		})
	}
}
const api = new Api();
export default api;