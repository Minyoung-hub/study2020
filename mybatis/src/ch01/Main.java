package ch01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main {
	public static void main(String[] args) {
		String DB_URL = "jdbc:oracle:thin:@127.0.0.1:1521:XE"; // 주소정보 // ★★★핵심
		String DB_USER = "mybatis"; // ★★★핵심
		String DB_PASSWORD = "mybatis"; // ★★★핵심
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;  // 여기에 table 받을거임
		
		try { //jdbc의 단점, try블럭으로 모두 묶어야함, 중복코드가 많아짐
			Class.forName("oracle.jdbc.driver.OracleDriver"); // ★★★핵심
			conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD); // db연결
			String query = "SELECT user_id, user_name, reg_date FROM users WHERE user_id = ?"; //?는 변수
			stmt = conn.prepareStatement(query);
			stmt.setInt(1, 1); //(변수가 몇번째인지, 변수값)
			rs = stmt.executeQuery();
			
			User user = null;
			while(rs.next()) { //R
				user = new User(); //O
				user.setUserId(rs.getInt(1)); //mapping
				user.setUserName(rs.getString(2)); //mapping
				user.setRegDate(rs.getDate(3)); //mapping
				System.out.println(user);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				rs.close();
				stmt.close();
				conn.close();
			}catch(SQLException e) {}
		}
	}
}