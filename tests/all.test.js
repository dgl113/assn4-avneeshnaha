import path from 'path';

describe('all tests', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
  });

  beforeEach(async () => {
    await page.reload({
      waitUntil: 'networkidle2',
    });
  });

  it('case1', async () => {
    const totalCost = await page.evaluate('getOrderTotal()');
    expect(totalCost).toEqual(0);
  });

  it('case2', async () => {
    await page.evaluate('addItem("5","Short (236ml)","Blonde Roast Coffee")');
    const totalCost = await page.evaluate('getOrderTotal()');
    expect(totalCost).toBeCloseTo(14.95);
  });

  it('case3', async () => {
    await page.evaluate('addItem("5","Short (236ml)","Blonde Roast Coffee")');
    await page.evaluate('addItem("1","Venti (591ml)","English Breakfast Tea")');
    const totalCost = await page.evaluate('getOrderTotal()');
    expect(totalCost).toBeCloseTo(18.45);
  });

  it('case4', async () => {
    await page.evaluate('addItem("5","Short (236ml)","Blonde Roast Coffee")');
    await page.evaluate('addItem("1","Venti (591ml)","English Breakfast Tea")');
    await page.evaluate('addItem("5","Grande (473ml)","Dark Roast Coffee")');
    await page.evaluate('deleteItem(1)');
    const totalCost = await page.evaluate('getOrderTotal()');
    expect(totalCost).toBeCloseTo(32.4);
  });

  it('case5', async () => {
    await page.evaluate('addItem("5","Short (236ml)","Blonde Roast Coffee")');
    await page.evaluate('addItem("1","Venti (591ml)","English Breakfast Tea")');
    await page.evaluate('addItem("5","Grande (473ml)","Dark Roast Coffee")');
    await page.evaluate('deleteItem(1)');
    await page.evaluate('addItem("9","Short (236ml)","Earl Grey Tea")');
    await page.evaluate('addItem("5","Grande (473ml)","Dark Roast Coffee")');
    await page.evaluate('addItem("3","Tall (354ml)","Medium Roast Coffee")');
    await page.evaluate('deleteItem(0)');
    await page.evaluate('deleteItem(0)');
    const totalCost = await page.evaluate('getOrderTotal()');
    expect(totalCost).toBeCloseTo(52.67);
  });
});
