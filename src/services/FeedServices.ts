import { useAccessTokenStore } from '@/stores/accessToken';
import { HttpApiServices } from './HttpApiServices';

export class FeedServices extends HttpApiServices {
  async getFeedPrincipal() {
    return this.get('/feed');
  }

  async getFeedPorId(id: string) {
    return await this.get(`/feed?id=${id}`);
  }

  async toggleCurtir(id: string) {
    return this.put(`/like?id=${id}`);
  }

  async enviarComentario(id: string, comentario: string) {
    return this.put(`/comentario?id=${id}`, { comentario });
  }
}
