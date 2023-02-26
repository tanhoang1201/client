import { New } from '../@types';
import http from '../utils/http';

const URL = 'BlogApi';
const newApi = {
	getNews() {
		return http.get<New[]>(URL);
	},
	createNew(body: Omit<New, 'blogId'>) {
		return http.post<New>(URL, body);
	},
	getNewItem(id: string) {
		return http.get<New>(`${URL}/${id}`);
	},
	updateNew(id: string, body: New) {
		return http.put<New>(`${URL}/${id}`, body);
	},
	deleteNew(id: string) {
		return http.delete<{}>(`${URL}/${id}`);
	},
};

export default newApi;
