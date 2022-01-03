package spring.core.ch02.ex01.user.stock.dao;

import org.springframework.stereotype.Repository;

@Repository
public class StockDaoImpl implements StockDao{
	@Override
	public int getStockCnt() {
		return 3 / 0;
	}
}