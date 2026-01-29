import type { Testimoni } from "~/types/domain.new";
import type { ITestimoniRepository } from "./interfaces";

export class TestimoniRepository implements ITestimoniRepository {
  getAll(): Promise<Testimoni[]> {
    const items: Testimoni[] = Array.from({ length: 5 }, (_, i) => ({
      id: `${i + 1}`,
      icon: "/mayoblox/mayo-confused.png",
      username: "TimothyRonald",
      city: "Bekasi",
      content:
        "Harga yang kompetitif, Testimoni dan bukti Transaksi, pilihan metode pembayaran bermacam dan memudahkan pembeli, proses transaksi yang mudah",
      image: "/assets/placeholder/mayo-sad.png",
    }));

    return Promise.resolve(items);
  }
}
