import { describe, expect, it } from 'vitest';
import { products } from './products';
import { plans } from './plans';

describe('SecureFlow catalogue', () => {
  it('keeps the four products in the editorial flow order', () => {
    expect(products.map((product) => product.name)).toEqual(['FileStudio', 'PurgeDoc', 'TableExtract', 'CleanSheet']);
    expect(products.map((product) => product.category)).toEqual(['Prepare', 'Protect', 'Extract', 'Automate']);
  });

  it('exposes individual products and pack options to the access form', () => {
    expect(plans.map((plan) => plan.value)).toEqual(['filestudio', 'purgedoc', 'tableextract', 'cleansheet', 'pack-2', 'pack-3', 'complete']);
  });
});
