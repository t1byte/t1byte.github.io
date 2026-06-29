import en from './en.json';
import vi from './vi.json';

export type Lang = 'en' | 'vi';

export const LANG_KEYS = [
  'langNavHome', 'langNavDemo', 'langNavProducts', 'langNavBlog',
  'langMenu',
  'langHeroTitle', 'langHeroDesc', 'langHeroBtn',
  'langFeaturesTitle', 'langFeaturesDesc',
  'langFeature1Title', 'langFeature1Desc',
  'langFeature2Title', 'langFeature2Desc',
  'langFeature3Title', 'langFeature3Desc',
  'langFeature4Title', 'langFeature4Desc',
  'langFeature5Title', 'langFeature5Desc',
  'langFeature6Title', 'langFeature6Desc',
  'langPreviewAlt',
  'langCtaTitle', 'langCtaDesc', 'langCtaBtn',
  'langBlogHeroTitle', 'langBlogHeroDesc',
  'langBreadcrumbHome', 'langBreadcrumbBlog', 'langBreadcrumbProducts',
  'langReadTime', 'langReadMore',
  'langSidebarTemplateTitle', 'langSidebarTemplateDesc', 'langSidebarTemplateBtn',
  'langSidebarCategories', 'langSidebarRecentPosts',
  'langProductsHeroTitle', 'langProductsHeroDesc',
  'langFeatured', 'langAllProducts',
  'langFree', 'langBuyNow',
  'langSidebarFeatured',
  'langBackToBlog', 'langBackToProducts',
  'langFooterPowered', 'langFooterAffiliate',
  'langAmazonDisclaimer',
  'langCategoryPlanning', 'langCategoryWebsite',
  'langCategoryTemplates', 'langCategoryPresets', 'langCategoryFonts',
] as const;

export type TranslationKey = (typeof LANG_KEYS)[number];
export type Translations = Record<TranslationKey, string>;

export const translations: Record<Lang, Translations> = { en, vi };
