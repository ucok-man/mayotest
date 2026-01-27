// Custom Hooks - Following SOLID: Dependency Inversion Principle
// High-level modules (components) depend on abstractions (hooks)

import { useState, useEffect } from 'react';
import type {
    Product,
    RobuxProduct,
    RecentlySoldItem,
    Testimonial,
    FAQ,
    Statistics,
    RobuxStock,
} from '../types/domain';
import type {
    IProductRepository,
    IRobuxRepository,
    IOrderRepository,
    ITestimonialRepository,
    IFAQRepository,
} from '../repositories/interfaces';

// Hook for fetching products
export const useProducts = (repository: IProductRepository) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await repository.getBestSellers();
                setProducts(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [repository]);

    return { products, loading, error };
};

// Hook for fetching robux products
export const useRobuxProducts = (repository: IRobuxRepository) => {
    const [products, setProducts] = useState<RobuxProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await repository.getAllTypes();
                setProducts(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [repository]);

    return { products, loading, error };
};

// Hook for fetching robux stock
export const useRobuxStock = (repository: IRobuxRepository) => {
    const [stock, setStock] = useState<RobuxStock | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchStock = async () => {
            try {
                setLoading(true);
                const data = await repository.getStock();
                setStock(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchStock();
    }, [repository]);

    return { stock, loading, error };
};

// Hook for fetching statistics
export const useStatistics = (repository: IOrderRepository) => {
    const [stats, setStats] = useState<Statistics | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const data = await repository.getStatistics();
                setStats(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [repository]);

    return { stats, loading, error };
};

// Hook for fetching recently sold items
export const useRecentlySold = (repository: IOrderRepository, limit: number = 4) => {
    const [items, setItems] = useState<RecentlySoldItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true);
                const data = await repository.getRecentlySold(limit);
                setItems(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [repository, limit]);

    return { items, loading, error };
};

// Hook for fetching testimonials
export const useTestimonials = (repository: ITestimonialRepository) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const data = await repository.getAll();
                setTestimonials(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [repository]);

    return { testimonials, loading, error };
};

// Hook for fetching FAQs
export const useFAQs = (repository: IFAQRepository) => {
    const [faqs, setFAQs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                setLoading(true);
                const data = await repository.getAll();
                setFAQs(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, [repository]);

    return { faqs, loading, error };
};
