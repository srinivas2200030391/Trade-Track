package com.tradetrack.services;

import com.tradetrack.models.Stock;
import com.tradetrack.repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public Stock createStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public List<Stock> getStocksByUserId(Long userId) {
        return stockRepository.findByClientId(userId);
    }

    public Stock updateStock(Long id, Stock updatedStock) {
        Stock stock = stockRepository.findById(id).orElseThrow(() -> new RuntimeException("Stock not found"));
        stock.setName(updatedStock.getName());
        stock.setTicker(updatedStock.getTicker());
        stock.setQuantity(updatedStock.getQuantity());
        stock.setBuyPrice(updatedStock.getBuyPrice());
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public Double calculatePortfolioValue(Long userId) {
        List<Stock> stocks = getStocksByUserId(userId);
        return stocks.stream().mapToDouble(stock -> stock.getQuantity() * stock.getBuyPrice()).sum();
    }
}
