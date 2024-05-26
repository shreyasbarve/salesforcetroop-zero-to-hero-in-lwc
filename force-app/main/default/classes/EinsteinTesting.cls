public class EinsteinTesting {
  public static List<Account> getUnderManagementColdAccounts() {
    List<Account> accounts = [
      SELECT Name, Industry, Rating
      FROM Account
      WHERE Name LIKE 's%' AND Rating = 'Cold' AND CreatedDate < LAST_N_MONTHS:6
    ];
    return accounts;
  }
}
