package com.tradetrack.controllers;

import com.tradetrack.models.Stock;
import com.tradetrack.services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping
    public ResponseEntity<Stock> addStock(@RequestBody Stock stock) {
        return ResponseEntity.ok(stockService.createStock(stock));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Stock>> getStocksByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(stockService.getStocksByUserId(userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable Long id, @RequestBody Stock updatedStock) {
        return ResponseEntity.ok(stockService.updateStock(id, updatedStock));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
        return ResponseEntity.ok("Stock deleted successfully");
    }

//    @GetMapping("/user/{userId}/portfolio-value")
//    public ResponseEntity<Double> getPortfolioValue(@PathVariable Long userId) {
//        return ResponseEntity.ok(stockService.calculatePortfolioValue(userId));
//    }
}
