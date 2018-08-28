/*
- Checking against COMPLETE_DATA there are 477 books found
- there are 489 books in this list
- 12 books are missing: folder_name is inconsistent perhaps
 */

let BOOK_TO_FOLDER = {
  "aeschylus-tragedies-1777": [
    "aeschylus-tragedies-1777_cover01.jpg",
    "aeschylus-tragedies-1777_plate.jpg",
    "aeschylus-tragedies-1777_spine-crop.png",
    "aeschylus-tragedies-1777_spine-orig.JPG",
    "aeschylus-tragedies-1777_title.jpg"
  ],
  "bacon-letters-1763": [
    "bacon-letters-1763_plate.jpg",
    "bacon-letters-1763_spine-crop.png",
    "bacon-letters-1763_spine-orig.JPG",
    "bacon-letters-1763_title.jpg"
  ],
  "baldwin-yearly-1762": [
    "baldwin-yearly-1762_plate.jpg",
    "baldwin-yearly-1762_spine-crop.png",
    "baldwin-yearly-1762_spine-orig.JPG",
    "baldwin-yearly-1762_title.jpg"
  ],
  "beattie-evidences-1786": [
    "beattie-evidences-1786_cover01.jpg",
    "beattie-evidences-1786_endpapers.jpg",
    "beattie-evidences-1786_spine-orig.jpg",
    "beattie-evidences-1786_title.jpg",
    "beattie-evidences-1786_title_vol.II.jpg"
  ],
  "bisse-beauty-1717": [
    "bisse-beauty-1717_cover01.jpg",
    "bisse-beauty-1717_cover02.jpg",
    "bisse-beauty-1717_endpapers.JPG",
    "bisse-beauty-1717_plate.jpg",
    "bisse-beauty-1717_spine-orig.jpg",
    "bisse-beauty-1717_title.jpg"
  ],
  "bowdler-letters-1788": [
    "bowdler-letters-1788_extra01.jpg",
    "bowdler-letters-1788_plate.jpg",
    "bowdler-letters-1788_spine-crop.png",
    "bowdler-letters-1788_spine-orig.JPG",
    "bowdler-letters-1788_title.jpg"
  ],
  "bowdler-poems-1786": [
    "bowdler-poems-1786_cover01.jpg",
    "bowdler-poems-1786_extra01.JPG",
    "bowdler-poems-1786_extra02.jpg",
    "bowdler-poems-1786_extra03.jpg",
    "bowdler-poems-1786_spine-orig.jpg",
    "bowdler-poems-1786_title.jpg",
    "IMG_4370.jpg"
  ],
  "bower-account-1804": [
    "bower-account-1804_cover01.jpg",
    "bower-account-1804_endpapers.jpg",
    "bower-account-1804_spine-orig.jpg",
    "bower-account-1804_title01.jpg",
    "bower-account-1804_title02.jpg"
  ],
  "bromley-collection-1787": [
    "bromley-collection-1787_extra01.jpg",
    "bromley-collection-1787_plate.jpg",
    "bromley-collection-1787_spine-crop.png",
    "bromley-collection-1787_spine-orig.JPG",
    "bromley-collection-1787_title.jpg"
  ],
  "burnet-bishop-1750": [
    "burnet-bishop-1750_cover01.jpg",
    "burnet-bishop-1750_cover02.jpg",
    "burnet-bishop-1750_plate.jpg",
    "burnet-bishop-1750_spine-orig.jpg",
    "burnet-bishop-1750_title.jpg"
  ],
  "campbell-present-1757": [
    "campbell-present-1757_plate.jpg",
    "campbell-present-1757_spine-crop.png",
    "campbell-present-1757_spine-orig.JPG",
    "campbell-present-1757_title.jpg"
  ],
  "cervantes-history-1733": [
    "cervantes-history-1733_endpapers.jpg",
    "cervantes-history-1733_spine-orig.jpg",
    "cervantes-history-1733_title.jpg"
  ],
  "chapone-letters-1773": [
    "chapone-letters-1773_extra01.jpg",
    "chapone-letters-1773_plate.jpg",
    "chapone-letters-1773_spine-orig.jpg",
    "chapone-letters-1773_title.jpg"
  ],
  "chesterfield-letters-1774": [
    "chesterfield-letters-1774_plate.jpg",
    "chesterfield-letters-1774_spine-crop.png",
    "chesterfield-letters-1774_spine-orig.JPG",
    "chesterfield-letters-1774_title01vol01.jpg",
    "chesterfield-letters-1774_title02vol01.jpg",
    "chesterfield-letters-1774_titlevol02.jpg"
  ],
  "cheyne-philosophical-1725": [
    "cheyne-philosophical-1725_cover01.jpg",
    "cheyne-philosophical-1725_plate.jpg",
    "cheyne-philosophical-1725_spine-orig.jpg",
    "cheyne-philosophical-1725_title.jpg"
  ],
  "collins-peerage-1735": [
    "collins-peerage-1735_plate.jpg",
    "collins-peerage-1735_spine-crop.png",
    "collins-peerage-1735_spine-orig.JPG",
    "collins-peerage-1735_title01vol01.jpg",
    "collins-peerage-1735_title01vol02.jpg",
    "collins-peerage-1735_title01vol03.jpg"
  ],
  "collins-peerage-1779": [
    "collins-peerage-1779_extra01.jpg",
    "collins-peerage-1779_margin01vol01.jpg",
    "collins-peerage-1779_margin02vol01.jpg",
    "collins-peerage-1779_margin03vol01.jpg",
    "collins-peerage-1779_margin04vol01.jpg",
    "collins-peerage-1779_margin05vol01.jpg",
    "collins-peerage-1779_margin06vol01.jpg",
    "collins-peerage-1779_margin07vol01.jpg",
    "collins-peerage-1779_margin08vol1.jpg",
    "collins-peerage-1779_margin09vol01.jpg",
    "collins-peerage-1779_margin10vol01.jpg",
    "collins-peerage-1779_margin11vol01.jpg",
    "collins-peerage-1779_margin12vol01.jpg",
    "collins-peerage-1779_margin13vol01.jpg",
    "collins-peerage-1779_margin14vol01.jpg",
    "collins-peerage-1779_margin15vol01.jpg",
    "collins-peerage-1779_margin16vol01.jpg",
    "collins-peerage-1779_margin17vol01.jpg",
    "collins-peerage-1779_margin18vol01.jpg",
    "collins-peerage-1779_margin19vol02.jpg",
    "collins-peerage-1779_margin20vol02.jpg",
    "collins-peerage-1779_margin21vol02.jpg",
    "collins-peerage-1779_margin22vol02.jpg",
    "collins-peerage-1779_margin23vol02.jpg",
    "collins-peerage-1779_margin24vol02.jpg",
    "collins-peerage-1779_margin25vol02.jpg",
    "collins-peerage-1779_margin26vol02.jpg",
    "collins-peerage-1779_plate.jpg",
    "collins-peerage-1779_spine-orig.jpg",
    "collins-peerage-1779_title01vol01.jpg",
    "collins-peerage-1779_title02vol01.jpg"
  ],
  "combe-royal-1789": [
    "combe-royal-1789_plate.jpg",
    "combe-royal-1789_spine-crop.png",
    "combe-royal-1789_spine-orig.JPG",
    "combe-royal-1789_title01.jpg",
    "combe-royal-1789_title02.jpg"
  ],
  "cowper-poetical-1854": [
    "cowper-poetical-1754_titlevol02.jpg",
    "cowper-poetical-1854_extra01.JPG",
    "cowper-poetical-1854_margin01.JPG",
    "cowper-poetical-1854_plate.jpg",
    "cowper-poetical-1854_spine-orig.JPG",
    "cowper-poetical-1854_titlevol01.JPG"
  ],
  "davies-discoverie-1747": [
    "davies-discoverie-1747_extra01.jpg",
    "davies-discoverie-1747_plate.jpg",
    "davies-discoverie-1747_spine-orig.jpg",
    "davies-discoverie-1747_title.jpg"
  ],
  "delany-historical-1740": [
    "delany-historical-1740_plate.jpg",
    "delany-historical-1740_spine-crop.png",
    "delany-historical-1740_spine-orig.JPG",
    "delany-historical-1740_titlevol01.jpg"
  ],
  "delany-revelation-1733": [
    "delany-revelation-1733_cover01.jpg",
    "delany-revelation-1733_plate.jpg",
    "delany-revelation-1733_spine-origvol01.JPG",
    "delany-revelation-1733_title.jpg"
  ],
  "duncan-elements-1752": [
    "duncan-elements-1752_plate.jpg",
    "duncan-elements-1752_spine-orig.jpg",
    "duncan-elements-1752_title01.jpg",
    "duncan-elements-1752_title02.jpg"
  ],
  "gardiner-excursion-1806": [
    "gardiner-excursion-1806_cover01.jpg",
    "gardiner-excursion-1806_cover02.jpg",
    "gardiner-excursion-1806_plate.jpg",
    "gardiner-excursion-1806_platevol02.jpg",
    "gardiner-excursion-1806_spine-orig.jpg",
    "gardiner-excursion-1806_title.jpg",
    "gardiner-excursion-1806_titlevol02.jpg"
  ],
  "gay-fables-1746": [
    "gay-fables-1746_cover02.jpg",
    "gay-fables-1746_extra01vol02.JPG",
    "gay-fables-1746_plate.JPG",
    "gay-fables-1746_plateandtitlevol02.jpg",
    "gay-fables-1746_titlevol01.jpg"
  ],
  "gifford-jacobin-1799": [
    "gifford-jacobin-1799_margin01.jpg",
    "gifford-jacobin-1799_plate.jpg",
    "gifford-jacobin-1799_spine-crop.png",
    "gifford-jacobin-1799_spine-orig.JPG",
    "gifford-jacobin-1799_title01.jpg",
    "gifford-jacobin-1799_title02.jpg"
  ],
  "goldsmith-history-1774": [
    "goldsmith-history-1774_extra01.jpg",
    "goldsmith-history-1774_extra02.jpg",
    "goldsmith-history-1774_extra03.jpg",
    "goldsmith-history-1774_plate.jpg",
    "goldsmith-history-1774_spine-crop.png",
    "goldsmith-history-1774_spine-orig.JPG",
    "goldsmith-history-1774_titlevol01.jpg"
  ],
  "goldsmith-history-1805": [
    "goldsmith-history-1805_margin01.jpg",
    "goldsmith-history-1805_plate.jpg",
    "goldsmith-history-1805_spine-crop.png",
    "goldsmith-history-1805_spine-orig.JPG",
    "goldsmith-history-1805_title01.jpg",
    "goldsmith-history-1805_title02.jpg"
  ],
  "grant-letters-1807": [
    "goldsmith-history-1805_cover01.jpg",
    "goldsmith-history-1805_endpapers.jpg",
    "goldsmith-history-1805_titlevol01.jpg"
  ],
  "hawkins-tracts-1758": [
    "hawkins-tracts-1758_extra01.jpg",
    "hawkins-tracts-1758_extra02.jpg",
    "hawkins-tracts-1758_plate.jpg",
    "hawkins-tracts-1758_spine-crop.png",
    "hawkins-tracts-1758_spine-orig.JPG",
    "hawkins-tracts-1758_titlevol01.jpg",
    "hawkins-tracts-1758_titlevol02.jpg",
    "hawkins-tracts-1758_titlevol03.jpg"
  ],
  "hayley-poems-1785": [
    "hayley-poems-1785_extra01.jpg",
    "hayley-poems-1785_extra02.jpg",
    "hayley-poems-1785_extra03.jpg",
    "hayley-poems-1785_extra04.jpg",
    "hayley-poems-1785_extra05.jpg",
    "hayley-poems-1785_extra06.jpg",
    "hayley-poems-1785_extra07.jpg",
    "hayley-poems-1785_extra08.jpg",
    "hayley-poems-1785_extra09.jpg",
    "hayley-poems-1785_extra10.jpg",
    "hayley-poems-1785_extra11.jpg",
    "hayley-poems-1785_extra12.jpg",
    "hayley-poems-1785_extra13.jpg",
    "hayley-poems-1785_extra14.jpg",
    "hayley-poems-1785_extra15.jpg",
    "hayley-poems-1785_extra16.jpg",
    "hayley-poems-1785_extra17.jpg",
    "hayley-poems-1785_extra18.jpg",
    "hayley-poems-1785_extra19.jpg",
    "hayley-poems-1785_extra20.jpg",
    "hayley-poems-1785_extra21.jpg",
    "hayley-poems-1785_extra22.jpg",
    "hayley-poems-1785_extra23.jpg",
    "hayley-poems-1785_extra24.jpg",
    "hayley-poems-1785_extra25.jpg",
    "hayley-poems-1785_extra26.jpg",
    "hayley-poems-1785_extra27.jpg",
    "hayley-poems-1785_extra28.jpg",
    "hayley-poems-1785_extra29.jpg",
    "hayley-poems-1785_extra30.jpg",
    "hayley-poems-1785_extra31.jpg",
    "hayley-poems-1785_extra32.jpg",
    "hayley-poems-1785_extra33.jpg",
    "hayley-poems-1785_extra34.JPG",
    "hayley-poems-1785_extra35.JPG",
    "hayley-poems-1785_extra36.JPG",
    "hayley-poems-1785_extra37.JPG",
    "hayley-poems-1785_extra38.JPG",
    "hayley-poems-1785_extra39.JPG",
    "hayley-poems-1785_extra40.JPG",
    "hayley-poems-1785_extra41.JPG",
    "hayley-poems-1785_extra42.JPG",
    "hayley-poems-1785_extra43.JPG",
    "hayley-poems-1785_extra44.JPG",
    "hayley-poems-1785_extra45.JPG",
    "hayley-poems-1785_extra46.JPG",
    "hayley-poems-1785_extra47.JPG",
    "hayley-poems-1785_extra48.JPG",
    "hayley-poems-1785_extra49.JPG",
    "hayley-poems-1785_extra50.JPG",
    "hayley-poems-1785_extra51.JPG",
    "hayley-poems-1785_extra52.JPG",
    "hayley-poems-1785_extra53.JPG",
    "hayley-poems-1785_extra54.JPG",
    "hayley-poems-1785_plate.jpg",
    "hayley-poems-1785_spine-orig.jpg",
    "hayley-poems-1785_titlevol01.jpg"
  ],
  "hereford-history-1793": [
    "hereford-history-1793_plate.jpg",
    "hereford-history-1793_spine-crop.png",
    "hereford-history-1793_spine-orig.JPG",
    "hereford-history-1793_titlevol01.jpg"
  ],
  "holden-paraphrase-1776": [
    "holden-paraphrase-1776_plate.jpg",
    "holden-paraphrase-1776_spine-crop.png",
    "holden-paraphrase-1776_spine-orig.JPG",
    "holden-paraphrase-1776_titlevol1.jpg"
  ],
  "horne-considerations-1777": [
    "horne-considerations-1777_endpapers.jpg",
    "horne-considerations-1777_margin01.jpg",
    "horne-considerations-1777_margin02.jpg",
    "horne-considerations-1777_margin03.jpg",
    "horne-considerations-1777_margin04.jpg",
    "horne-considerations-1777_margin05.jpg",
    "horne-considerations-1777_margin06.jpg",
    "horne-considerations-1777_margin07.jpg",
    "horne-considerations-1777_margin08.jpg",
    "horne-considerations-1777_margin09.jpg",
    "horne-considerations-1777_margin11.jpg",
    "horne-considerations-1777_margin12.jpg",
    "horne-considerations-1777_margin13.jpg",
    "horne-considerations-1777_margin14.jpg",
    "horne-considerations-1777_margin15.jpg",
    "horne-considerations-1777_spine-orig.jpg",
    "horne-considerations-1777_title.jpg",
    "horne-considerations1777_margin10.jpg"
  ],
  "horne-letter-1784": [
    "horne-letter-1784_spine-orig.jpg",
    "horne-letter-1784_title.jpg"
  ],
  "horsley-letters-1784": [
    "horsley-letters-1784_plate.jpg",
    "horsley-letters-1784_spine-crop.png",
    "horsley-letters-1784_spine-orig.JPG",
    "horsley-letters-1784_title.jpg"
  ],
  "hulme-historical-1771": [
    "hulme-historical-1771_margin01.jpg",
    "hulme-historical-1771_margin02.jpg",
    "hulme-historical-1771_margin03.jpg",
    "hulme-historical-1771_margin04.jpg",
    "hulme-historical-1771_margin05.jpg",
    "hulme-historical-1771_margin06.jpg",
    "hulme-historical-1771_margin07.jpg",
    "hulme-historical-1771_margin08.jpg",
    "hulme-historical-1771_margin09.jpg",
    "hulme-historical-1771_margin10.jpg",
    "hulme-historical-1771_margin11.jpg",
    "hulme-historical-1771_plate.jpg",
    "hulme-historical-1771_spine-crop.png",
    "hulme-historical-1771_spine-orig.JPG",
    "hulme-historical-1771_title.jpg"
  ],
  "hume-history-1762": [
    "hume-history-1762_plate.jpg",
    "hume-history-1762_spine-crop.png",
    "hume-history-1762_spine-orig.JPG",
    "hume-history-1762_title01vol01.jpg",
    "hume-history-1762_title02vol01.jpg"
  ],
  "jenner-placid-1770": [
    "IMG_4526.jpg",
    "jenner-placid-1770_cover01.jpg",
    "jenner-placid-1770_margin01.jpg",
    "jenner-placid-1770_spine-orig.jpg",
    "jenner-placid-1770_title.JPG"
  ],
  "johnson-dictionary-1810": [
    "johnson-dictionary-1810_extra01.jpg",
    "johnson-dictionary-1810_plate.jpg",
    "johnson-dictionary-1810_plate02.jpg",
    "johnson-dictionary-1810_spine-orig.JPG",
    "johnson-dictionary-1810_titlevol01.jpg",
    "johnson-dictionary-1810_titlevol02.jpg"
  ],
  "jones-secret-1697": [
    "jones-secret-1697_extra01.jpg",
    "jones-secret-1697_plate.jpg",
    "jones-secret-1697_spine-orig.jpg",
    "jones-secret-1697_title01.jpg"
  ],
  "junius-letters-1788": [
    "junius-letters-1788_plate.jpg",
    "junius-letters-1788_spine-orig.jpg",
    "junius-letters-1788_title.jpg"
  ],
  "kennedy-method-1752": [
    "kennedy-method-1752_extra01.jpg",
    "kennedy-method-1752_extra02.jpg",
    "kennedy-method-1752_extra03.jpg",
    "kennedy-method-1752_extra04.jpg",
    "kennedy-method-1752_plate.jpg",
    "kennedy-method-1752_spine-crop.png",
    "kennedy-method-1752_spine-orig.JPG",
    "kennedy-method-1752_title.jpg"
  ],
  "knox-elegant-1801": [
    "knox-elegant-1801_cover01.jpg",
    "knox-elegant-1801_plate.jpg",
    "knox-elegant-1801_spine-crop.png",
    "knox-elegant-1801_spine-orig.JPG",
    "knox-elegant-1801_titlevol02.jpg",
    "knox-elegant-1801_titlevol1.jpg"
  ],
  "longmate-peerage-1810": [
    "longmate-peerage-1810_plate.jpg",
    "longmate-peerage-1810_spine-orig.jpg",
    "longmate-peerage-1810_titlevol01.jpg"
  ],
  "longmate-pocket-1790": [
    "longmate-pocket-1790_plate.jpg",
    "longmate-pocket-1790_spine-orig.jpg",
    "longmate-pocket-1790_titlevol01.jpg",
    "longmate-pocket-1790_titlevol02.jpg"
  ],
  "lowth-directions-1735": [
    "lowth-directions-1735_endpapers.jpg",
    "lowth-directions-1735_spine-orig.jpg",
    "lowth-directions-1735_title.jpg"
  ],
  "lowth-lectures-1787": [
    "lowth-lectures-1787_plate.jpg",
    "lowth-lectures-1787_spine-crop.png",
    "lowth-lectures-1787_spine-orig.JPG",
    "lowth-lectures-1787_titlevol01.jpg"
  ],
  "lowth-short-1767": [
    "lowth-short-1767_spine-orig.jpg",
    "lowth-short-1767_title.jpg",
    "lowth_short_1767_endpapers.jpg"
  ],
  "lyttelton-dialogues-1760": [
    "lyttelton-dialogues-1760_plate.jpg",
    "lyttelton-dialogues-1760_spine-crop.png",
    "lyttelton-dialogues-1760_spine-orig.JPG",
    "lyttelton-dialogues-1760_title.jpg"
  ],
  "macaulay-history-1763": [
    "macaulay-history-1763_extra01vol01.jpg",
    "macaulay-history-1763_extra02vol01-2.JPG",
    "macaulay-history-1763_extra02vol01.jpg",
    "macaulay-history-1763_extra04vol01.jpg",
    "macaulay-history-1763_extra05vol02.jpg",
    "macaulay-history-1763_extra06vol03.jpg",
    "macaulay-history-1763_margin01vol01.jpg",
    "macaulay-history-1763_margin02vol01.jpg",
    "macaulay-history-1763_margin03vol01.jpg",
    "macaulay-history-1763_margin04vol01.JPG",
    "macaulay-history-1763_margin05vol01.jpg",
    "macaulay-history-1763_margin06vol01.jpg",
    "macaulay-history-1763_margin07vol01.jpg",
    "macaulay-history-1763_margin08vol01.jpg",
    "macaulay-history-1763_plate.jpg",
    "macaulay-history-1763_spine-orig.JPG",
    "macaulay-history-1763_spine-orig.png",
    "macaulay-history-1763_title.jpg"
  ],
  "middleton-history-1741": [
    "middleton-history-1741_extra01.jpg",
    "middleton-history-1741_extra02.jpg",
    "middleton-history-1741_extra03.jpg",
    "middleton-history-1741_plate.jpg",
    "middleton-history-1741_spine-crop.png",
    "middleton-history-1741_spine-orig.JPG",
    "middleton-history-1741_titlevol01.jpg"
  ],
  "montagu-letters-1809": [
    "montagu-letters-1809_margin01vol01.jpg",
    "montagu-letters-1809_margin02vol01.jpg",
    "montagu-letters-1809_margin03vol01.jpg",
    "montagu-letters-1809_margin04vol01.jpg",
    "montagu-letters-1809_margin05vol01.jpg",
    "montagu-letters-1809_margin06vol01.jpg",
    "montagu-letters-1809_margin07vol01.jpg",
    "montagu-letters-1809_margin08vol01.jpg",
    "montagu-letters-1809_margin09vol01.jpg",
    "montagu-letters-1809_margin10vol01-2.JPG",
    "montagu-letters-1809_margin10vol01.jpg",
    "montagu-letters-1809_margin11vol01.jpg",
    "montagu-letters-1809_margin12vol01.jpg",
    "montagu-letters-1809_margin13vol01.jpg",
    "montagu-letters-1809_margin14vol01.jpg",
    "montagu-letters-1809_plate.jpg",
    "montagu-letters-1809_spine-orig.jpg",
    "montagu-letters-1809_title01vol01.jpg",
    "montagu-letters-1809_title02vol01.jpg"
  ],
  "more-coelebs-1809": [
    "more-coelebs-1809_margin01.jpg",
    "more-coelebs-1809_margin02.JPG",
    "more-coelebs-1809_plate.jpg",
    "more-coelebs-1809_spine-crop.png",
    "more-coelebs-1809_spine-orig.JPG",
    "more-coelebs-1809_titlevol02.jpg"
  ],
  "mottley-history-1739": [
    "mottley-history-1739_extra01vol01.jpg",
    "mottley-history-1739_extra02vol01.jpg",
    "mottley-history-1739_extra03.jpg",
    "mottley-history-1739_extra04vol03.jpg",
    "mottley-history-1739_extra05vol03.jpg",
    "mottley-history-1739_plate.jpg",
    "mottley-history-1739_spine-crop.png",
    "mottley-history-1739_spine-orig.JPG",
    "mottley-history-1739_titlevol01.jpg",
    "mottley-history-1739_titlevol02.jpg",
    "mottley-history-1739_titlevol03.jpg"
  ],
  "nepos-lives-1685": [
    "nepos-lives-1685_cover.jpg",
    "nepos-lives-1685_extra01.jpg",
    "nepos-lives-1685_extra02.jpg",
    "nepos-lives-1685_extra03.jpg",
    "nepos-lives-1685_margin01.jpg",
    "nepos-lives-1685_margin02.jpg",
    "nepos-lives-1685_margin03.jpg",
    "nepos-lives-1685_margin04.jpg",
    "nepos-lives-1685_spine-orig.jpg",
    "nepos-lives-1685_title.jpg"
  ],
  "paley-principles-1786": [
    "paley-principles-1786_plate.jpg",
    "paley-principles-1786_title.jpg"
  ],
  "parry-eden-1784": [
    "parry-eden-1784_cover.jpg",
    "parry-eden-1784_endpapers.jpg",
    "parry-eden-1784_spine-orig.jpg",
    "parry-eden-1784_title01vol02.jpg",
    "parry-eden-1784_title02vol02.jpg"
  ],
  "parsons-newmarket-1771": [
    "parsons-newmarket-1771_endpapers.jpg",
    "parsons-newmarket-1771_spine-orig.jpg",
    "parsons-newmarket-1771_titlevol02.jpg"
  ],
  "pegge-coins-1766": [
    "pegge-coins-1766_extra01.jpg",
    "pegge-coins-1766_margin01.jpg",
    "pegge-coins-1766_margin02.jpg",
    "pegge-coins-1766_margin03.jpg",
    "pegge-coins-1766_margin04.jpg",
    "pegge-coins-1766_margin05.jpg",
    "pegge-coins-1766_margin06.jpg",
    "pegge-coins-1766_margin07-1.jpg",
    "pegge-coins-1766_margin07.jpg",
    "pegge-coins-1766_margin08.jpg",
    "pegge-coins-1766_margin09.jpg",
    "pegge-coins-1766_margin10.jpg",
    "pegge-coins-1766_margin11.jpg",
    "pegge-coins-1766_margin12.jpg",
    "pegge-coins-1766_margin13.jpg",
    "pegge-coins-1766_plate.jpg",
    "pegge-coins-1766_title.jpg"
  ],
  "pegge-curialia-1782": [
    "pegge-curialia-1782_cover.jpg",
    "pegge-curialia-1782_extra01.jpg",
    "pegge-curialia-1782_extra02.jpg",
    "pegge-curialia-1782_extra03.jpg",
    "pegge-curialia-1782_extra04.jpg",
    "pegge-curialia-1782_extra05.jpg",
    "pegge-curialia-1782_extra06.jpg",
    "pegge-curialia-1782_extra07.jpg",
    "pegge-curialia-1782_extra08.jpg",
    "pegge-curialia-1782_extra09.jpg",
    "pegge-curialia-1782_extra10.jpg",
    "pegge-curialia-1782_extra11.jpg",
    "pegge-curialia-1782_extra12.jpg",
    "pegge-curialia-1782_extra13.jpg",
    "pegge-curialia-1782_extra14.jpg",
    "pegge-curialia-1782_extra15.jpg",
    "pegge-curialia-1782_extra16.jpg",
    "pegge-curialia-1782_extra17.jpg",
    "pegge-curialia-1782_extra18.jpg",
    "pegge-curialia-1782_extra19.jpg",
    "pegge-curialia-1782_extra20.jpg",
    "pegge-curialia-1782_extra21.jpg",
    "pegge-curialia-1782_extra22.jpg",
    "pegge-curialia-1782_extra23.jpg",
    "pegge-curialia-1782_plate.jpg",
    "pegge-curialia-1782_spine-crop.png",
    "pegge-curialia-1782_spine-orig.JPG",
    "pegge-curialia-1782_title.jpg"
  ],
  "philidor-chess-1773": [
    "philidor-chess-1773_plate.jpg",
    "philidor-chess-1773_spine-orig.jpg",
    "philidor-chess-1773_title.jpg"
  ],
  "pindar-odes-1753": [
    "pindar-odes-1753_plate.jpg",
    "pindar-odes-1753_plate02.JPG",
    "pindar-odes-1753_spine-crop.png",
    "pindar-odes-1753_spine-orig.jpg",
    "pindar-odes-1753_title.jpg",
    "pindar-odes-1753_titlevol02.jpg"
  ],
  "pollnitz-memoirs-1739": [
    "pollnitz-memoirs-1739_plate.jpg",
    "pollnitz-memoirs-1739_spine-crop.png",
    "pollnitz-memoirs-1739_spine-orig.JPG",
    "pollnitz-memoirs-1739_title01.jpg",
    "pollnitz-memoirs-1739_title02.jpg"
  ],
  "pope-works-1751": [
    "pope-works-1751_extra01vol04.jpg",
    "pope-works-1751_plate.jpg",
    "pope-works-1751_spine-crop.png",
    "pope-works-1751_spine-orig.JPG",
    "pope-works-1751_titlevol01.jpg",
    "pope-works-1751_titlevol03.jpg",
    "pope-works-1751_titlevol04.jpg",
    "pope-works-1751_titlevol05.jpg",
    "pope-works-1751_titlevol06.jpg",
    "pope-works-1751_titlevol07.jpg",
    "pope-works-1751_titlevol08.jpg",
    "pope-works-1751_titlevol09.jpg"
  ],
  "prideaux-true-1716": [
    "prideaux-true-1716_cover.jpg",
    "prideaux-true-1716_plate.jpg",
    "prideaux-true-1716_spine-orig.jpg",
    "prideaux-true-1716_title.jpg"
  ],
  "rousseau-emilius-1763": [
    "rousseau-emilius-1763_margin01vol01.jpg",
    "rousseau-emilius-1763_margin02vol01.jpg",
    "rousseau-emilius-1763_margin03vol01.jpg",
    "rousseau-emilius-1763_margin04vol01.jpg",
    "rousseau-emilius-1763_plate.jpg",
    "rousseau-emilius-1763_spine-orig.JPG",
    "rousseau-emilius-1763_title01.jpg",
    "rousseau-emilius-1763_title02.jpg"
  ],
  "rousseau-project-1761": [
    "rousseau-project-1761_extra01.jpg",
    "rousseau-project-1761_extra02.jpg",
    "rousseau-project-1761_extra03.jpg",
    "rousseau-project-1761_plate.jpg",
    "rousseau-project-1761_spine-crop.png",
    "rousseau-project-1761_spine-orig.JPG",
    "rousseau-project-1761_title.jpg"
  ],
  "sade-petrarch-1799": [
    "sade-petrarch-1799_margin01.JPG",
    "sade-petrarch-1799_margin02.JPG",
    "sade-petrarch-1799_margin03.JPG",
    "sade-petrarch-1799_margin04.JPG",
    "sade-petrarch-1799_platevol01.JPG",
    "sade-petrarch-1799_platevol02.JPG",
    "sade-petrarch-1799_spine-orig.JPG",
    "sade-petrarch-1799_titlevol01.JPG",
    "sade-petrarch-1799_titlevol02.JPG"
  ],
  "saintpierre-paul-1789": [
    "saintpierre-paul-1789_endpapers.jpg",
    "saintpierre-paul-1789_spine-orig.jpg",
    "saintpierre-paul-1789_title01.jpg",
    "saintpierre-paul-1789_title02.jpg"
  ],
  "sidney-countesse-16--": [
    "sidney-countesse-16--_cover.jpg",
    "sidney-countesse-16--_extra01.jpg",
    "sidney-countesse-16--_extra02.jpg",
    "sidney-countesse-16--_plate.jpg",
    "sidney-countesse-16--_spine-crop.png",
    "sidney-countesse-16--_spine-orig.JPG"
  ],
  "sidney-use-1744": [
    "sidney-use-1744_extra01.jpg",
    "sidney-use-1744_platevol01.JPG",
    "sidney-use-1744_platevol02.JPG",
    "sidney-use-1744_spine-crop.png",
    "sidney-use-1744_spine-orig.JPG",
    "sidney-use-1744_titlevol01.JPG",
    "sidney-use-1744_titlevol02.jpg"
  ],
  "smollett-adventures-1774": [
    "smollett-adventures-1774_plate.jpg",
    "smollett-adventures-1774_spine-orig.jpg",
    "smollett-adventures-1774_titlevol01.jpg",
    "smollett-adventures-1774_titlevol02.jpg"
  ],
  "smollett-complete-1757": [
    "smollett-complete-1757_plate.jpg",
    "smollett-complete-1757_spine-crop.png",
    "smollett-complete-1757_spine-orig.JPG",
    "smollett-complete-1757_titlevol01.jpg",
    "smollett-complete-1757_titlevol02.jpg",
    "smollett-complete-1757_titlevol03.jpg",
    "smollett-complete-1757_titlevol04.jpg"
  ],
  "stanhope-paraphrase-1732": [
    "stanhope-paraphrase-1732_plate.jpg",
    "stanhope-paraphrase-1732_spine-crop.png",
    "stanhope-paraphrase-1732_spine-orig.JPG",
    "stanhope-paraphrase-1732_titlevol01.jpg"
  ],
  "sterne-life-1760": [
    "sterne-life-1760_endpapers.jpg",
    "sterne-life-1760_spine-orig.jpg",
    "sterne-life-1760_titlevol01.jpg",
    "sterne-life-1760_titlevol02.jpg"
  ],
  "stewarton-revolutionary-1804": [
    "stewarton-revolutionary-1804_cover.jpg",
    "stewarton-revolutionary-1804_extra01.jpg",
    "stewarton-revolutionary-1804_spine-orig.jpg",
    "stewarton-revolutionary-1804_title.jpg"
  ],
  "swift-history-1758": [
    "swift-history-1758_margin01.jpg",
    "swift-history-1758_margin02.jpg",
    "swift-history-1758_margin03.jpg",
    "swift-history-1758_margin04.jpg",
    "swift-history-1758_margin05.jpg",
    "swift-history-1758_margin06.jpg",
    "swift-history-1758_margin07.jpg",
    "swift-history-1758_margin08.jpg",
    "swift-history-1758_margin09.jpg",
    "swift-history-1758_margin10.jpg",
    "swift-history-1758_plate.jpg",
    "swift-history-1758_spine-crop.png",
    "swift-history-1758_spine-orig.JPG",
    "swift-history-1758_title.jpg"
  ],
  "swift-works-1755": [
    "swift-works-1755_cover-set2.jpg",
    "swift-works-1755_extra01vol01-set2.jpg",
    "swift-works-1755_extra01vol02-set2.jpg",
    "swift-works-1755_extra02vol03-set2.jpg",
    "swift-works-1755_extravol02-set1.jpg",
    "swift-works-1755_extravol03-set1.jpg",
    "swift-works-1755_platevol01-set1.jpg",
    "swift-works-1755_spine-orig-set2.JPG",
    "swift-works-1755_titlevol01-set1.jpg",
    "swift-works-1755_titlevol02-set2.jpg",
    "swift-works-1755_titlevol03-set1.jpg",
    "swift-works-1755_titlevol2-set1.jpg"
  ],
  "sykes-enquiry-1737": [
    "sykes-enquiry-1737_extra01.JPG",
    "sykes-enquiry-1737_plate.jpg",
    "sykes-enquiry-1737_spine-orig.JPG",
    "sykes-enquiry-1737_title.jpg"
  ],
  "tasso-jerusalem-1764": [
    "tasso-jerusalem-1764_extra01vol01.jpg",
    "tasso-jerusalem-1764_extra02vol01.jpg",
    "tasso-jerusalem-1764_extra03vol01.jpg",
    "tasso-jerusalem-1764_extra04vol01.jpg",
    "tasso-jerusalem-1764_margin01vol01.jpg",
    "tasso-jerusalem-1764_margin02vol01.jpg",
    "tasso-jerusalem-1764_margin03vol01.jpg",
    "tasso-jerusalem-1764_plate.jpg",
    "tasso-jerusalem-1764_spine-orig.JPG",
    "tasso-jerusalem-1764_title01vol01.jpg",
    "tasso-jerusalem-1764_title02vol01.jpg",
    "tasso-jerusalem-1764_titlevol2.jpg"
  ],
  "tytler-historical-1760": [
    "tytler-historical-1760_plate.jpg",
    "tytler-historical-1760_spine-crop.png",
    "tytler-historical-1760_spine-orig.JPG",
    "tytler-historical-1760_title.jpg"
  ],
  "unlisted-baronetage-1804": [
    "unlisted-baronetage-1804_margin01vol02.jpg",
    "unlisted-baronetage-1804_margin02vol02.jpg",
    "unlisted-baronetage-1804_margin03vol02.jpg",
    "unlisted-baronetage-1804_margin04vol02.jpg",
    "unlisted-baronetage-1804_margin05vol02.jpg",
    "unlisted-baronetage-1804_margin06vol02.jpg",
    "unlisted-baronetage-1804_margin07vol02.jpg",
    "unlisted-baronetage-1804_margin08vol03.jpg",
    "unlisted-baronetage-1804_margin09vol03.jpg",
    "unlisted-baronetage-1804_margin10vol03.jpg",
    "unlisted-baronetage-1804_margin11vol03.jpg",
    "unlisted-baronetage-1804_margin12vol03.jpg",
    "unlisted-baronetage-1804_margin13vol03.jpg",
    "unlisted-baronetage-1804_margin14vol03.jpg",
    "unlisted-baronetage-1804_margin15vol03.jpg",
    "unlisted-baronetage-1804_margin16vol03.jpg",
    "unlisted-baronetage-1804_plate.jpg",
    "unlisted-baronetage-1804_spine-orig.jpg",
    "unlisted-baronetage-1804_title.jpg"
  ],
  "unlisted-baronetage-1806": [
    "unlisted-baronetage-1806_plate.JPG",
    "unlisted-baronetage-1806_spine-orig.jpg",
    "unlisted-baronetage-1806_title.JPG"
  ],
  "leftovers": [
    "IMG_5297.JPG",
    "IMG_5298.JPG",
    "IMG_5299.JPG",
    "IMG_5301.JPG",
    "IMG_5302.JPG",
    "IMG_5303.JPG",
    "IMG_5304.JPG",
    "IMG_5305.JPG",
    "IMG_5306.JPG",
    "IMG_5307.JPG",
    "IMG_5308.JPG",
    "IMG_5309.JPG",
    "IMG_5311.JPG",
    "IMG_5312.JPG",
    "IMG_5313.JPG",
    "IMG_5314.JPG",
    "IMG_5316.JPG"
  ],
  "unlisted-ladies-1751": [
    "unlisted-ladies-1751_endpapers.jpg",
    "unlisted-ladies-1751_margin01vol03.jpg",
    "unlisted-ladies-1751_margin02vol03.jpg",
    "unlisted-ladies-1751_margin03vol03.jpg",
    "unlisted-ladies-1751_margin04vol03.jpg",
    "unlisted-ladies-1751_margin05vol03.jpg",
    "unlisted-ladies-1751_margin06vol03.jpg",
    "unlisted-ladies-1751_spine-orig.jpg",
    "unlisted-ladies-1751_titlevol02.jpg",
    "unlisted-ladies-1751_titlevol03.jpg"
  ],
  "unlisted-leisure-1750": [
    "IMG_4450.jpg",
    "unlisted-leisure-1750_cover.jpg",
    "unlisted-leisure-1750_endpapersvol02.jpg",
    "unlisted-leisure-1750_margin01vol01.jpg",
    "unlisted-leisure-1750_margin02vol01.jpg",
    "unlisted-leisure-1750_margin03vol01.jpg",
    "unlisted-leisure-1750_margin04vol01.jpg",
    "unlisted-leisure-1750_margin05vol01.jpg",
    "unlisted-leisure-1750_margin06vol01.jpg",
    "unlisted-leisure-1750_plate.JPG",
    "unlisted-leisure-1750_spine-orig.jpg",
    "unlisted-leisure-1750_titlevol01.jpg",
    "unlisted-leisure-1750_titlevol02.jpg"
  ],
  "unlisted-peerage-1769": [
    "unlisted-peerage-1769_extra01vol02.jpg",
    "unlisted-peerage-1769_extra02.jpg",
    "unlisted-peerage-1769_margin01vol02.jpg",
    "unlisted-peerage-1769_plate-1.jpg",
    "unlisted-peerage-1769_spine-orig.jpg",
    "unlisted-peerage-1769_title01.jpg",
    "unlisted-peerage-1769_title02-1.jpg",
    "unlisted-peerage-1769_title02.jpg"
  ],
  "unlisted-public-1809": [
    "unlisted-public-1809_extra01.jpg",
    "unlisted-public-1809_plate.jpg",
    "unlisted-public-1809_spine-crop.png",
    "unlisted-public-1809_spine-orig.JPG",
    "unlisted-public-1809_title.jpg"
  ],
  "whiston-memoirs-1749": [
    "whiston-memoirs-1749_extra01.jpg",
    "whiston-memoirs-1749_plate.jpg",
    "whiston-memoirs-1749_spine-crop.png",
    "whiston-memoirs-1749_spine-orig.JPG",
    "whiston-memoirs-1749_title01vol02.jpg",
    "whiston-memoirs-1749_titlevol01.jpg"
  ],
  "wraxall-tour-1775": [
    "wraxall-tour-1775_extra01.jpg",
    "wraxall-tour-1775_plate.jpg",
    "wraxall-tour-1775_spine-orig.jpg",
    "wraxall-tour-1775_title.jpg"
  ],
  "xenophon-memoirs-1762": [
    "xenophon-memoirs-1762_extra01.jpg",
    "xenophon-memoirs-1762_extra02.jpg",
    "xenophon-memoirs-1762_plate.jpg",
    "xenophon-memoirs-1762_spine-crop.png",
    "xenophon-memoirs-1762_spine-orig.JPG",
    "xenophon-memoirs-1762_title-1.jpg"
  ],
  "Part": [
    {}
  ],
  "alembert-destruction-1765": [
    "alembert-destruction-1765_endpapers.JPG",
    "alembert-destruction-1765_spine-orig.JPG",
    "alembert-destruction-1765_title.jpg"
  ],
  "alembert-histoire-1787": [
    "#photos-1.dropbox.com.url",
    "alembert-histoire-1787_plate.jpg",
    "alembert-histoire-1787_spine-orig.JPG",
    "alembert-histoire-1787_title01vol01.jpg",
    "alembert-histoire-1787_title02vol01.JPG"
  ],
  "alembert-melanges-1753": [
    "alembert-melanges-1753_plate.JPG",
    "alembert-melanges-1753_spine-orig.JPG",
    "alembert-melanges-1753_title.JPG"
  ],
  "antonini-dictionnaire-1755": [
    "#photos-3.dropbox.com.url",
    "antonini-dictionnaire-1755_extra01.JPG",
    "antonini-dictionnaire-1755_plate.JPG",
    "antonini-dictionnaire-1755_spine-crop.png",
    "antonini-dictionnaire-1755_spine-orig.JPG",
    "antonini-dictionnaire-1755_title.JPG"
  ],
  "bar-epitres-1775": [
    "bar-epitres-1775_margin01vol02.JPG",
    "bar-epitres-1775_plate.JPG",
    "bar-epitres-1775_spine-orig.JPG",
    "bar-epitres-1775_title.JPG"
  ],
  "barthelemy-voyage-1790": [
    "barthelemy-voyage-1790_plate.JPG",
    "barthelemy-voyage-1790_spine-orig.JPG",
    "barthelemy-voyage-1790_title01.JPG",
    "barthelemy-voyage-1790_title02.JPG"
  ],
  "beaumarchais-folle-1785": [
    "beaumarchais-folle-1785_endpapers.JPG",
    "beaumarchais-folle-1785_plate.JPG",
    "beaumarchais-folle-1785_spine-orig.JPG",
    "beaumarchais-folle-1785_title01.JPG",
    "beaumarchais-folle-1785_title02.JPG"
  ],
  "beaumelle-memoirs-1778": [
    "beaumelle-memoirs-1778_plate.JPG",
    "beaumelle-memoirs-1778_spine-orig.JPG",
    "beaumelle-memoirs-1778_title01vol01.JPG",
    "beaumelle-memoirs-1778_title02vol01.JPG"
  ],
  "berchoux-gastronomie-1805": [
    "berchoux-gastronomie-1805_extra01.JPG",
    "berchoux-gastronomie-1805_plate.JPG",
    "berchoux-gastronomie-1805_spine-orig.JPG",
    "berchoux-gastronomie-1805_title01.JPG",
    "berchoux-gastronomie-1805_title02.JPG"
  ],
  "boccaccio-decameron-1527": [
    "boccaccio-decameron-1527_plate.JPG",
    "boccaccio-decameron-1527_spine-crop.png",
    "boccaccio-decameron-1527_spine-orig.JPG",
    "boccaccio-decameron-1527_title.JPG"
  ],
  "boileau-oeuvres-1746": [
    "boileau-oeuvres-1746_extra01vol01.JPG",
    "boileau-oeuvres-1746_extra02vol02.JPG",
    "boileau-oeuvres-1746_plate.JPG",
    "boileau-oeuvres-1746_spine-crop.png",
    "boileau-oeuvres-1746_spine-orig.JPG",
    "boileau-oeuvres-1746_title.JPG",
    "boileau-oeuvres-1746_titlevol02.JPG"
  ],
  "boismorand-histoire-1720": [
    "boismorand-histoire-1720_plate.JPG",
    "boismorand-histoire-1720_spine-org.JPG",
    "boismorand-histoire-1720_titlevol01.JPG",
    "boismorand-histoire-1720_titlevol02.JPG"
  ],
  "boispreaux-satyres-1754": [
    "boispreaux-satyres-1754_endpapers.JPG",
    "boispreaux-satyres-1754_spine-orig.JPG",
    "boispreaux-satyres-1754_title01vol03.JPG",
    "boispreaux-satyres-1754_title02vol03.JPG"
  ],
  "bolingbroke-letter-1753": [
    "bolingbroke-letter-1753_extra01.JPG",
    "bolingbroke-letter-1753_extra02.JPG",
    "bolingbroke-letter-1753_plate.JPG",
    "bolingbroke-letter-1753_spine-crop.png",
    "bolingbroke-letter-1753_spine-orig.JPG",
    "bolingbroke-letter-1753_title01.jpg",
    "bolingbroke-letter-1753_title02.jpg"
  ],
  "bolingbroke-letters-1749": [
    "bolingbroke-letters-1749_plate.JPG",
    "bolingbroke-letters-1749_spine-crop.png",
    "bolingbroke-letters-1749_spine-orig.JPG",
    "bolingbroke-letters-1749_title01.JPG",
    "bolingbroke-letters-1749_title02.JPG"
  ],
  "bossuet-discours-1780": [
    "bossuet-discours-1780_plate.JPG",
    "bossuet-discours-1780_spine-orig.JPG",
    "bossuet-discours-1780_titlevol01.JPG",
    "bossuet-discours-1780_titlevol02.jpg"
  ],
  "boudier-l'ami-1758": [
    "boudier-l'ami-1758_endpapers.JPG",
    "boudier-l'ami-1758_extra01.JPG",
    "boudier-l'ami-1758_extra02.JPG",
    "boudier-l'ami-1758_spine-orig.JPG",
    "boudier-l'ami-1758_title01.JPG",
    "boudier-l'ami-1758_title02.JPG"
  ],
  "boyer-dictionnaire-1796": [
    "boyer-dictionnaire-1796_plate.jpg",
    "boyer-dictionnaire-1796_spine-orig.JPG",
    "boyer-dictionnaire-1796_title.jpg"
  ],
  "brunton-self-control-1811": [
    "brunton-self-control-1811_cover.JPG",
    "brunton-self-control-1811_margin01vol02.JPG",
    "brunton-self-control-1811_margin02vol02.JPG",
    "brunton-self-control-1811_margin03vol02.JPG",
    "brunton-self-control-1811_margin04vol02.JPG",
    "brunton-self-control-1811_plate.JPG",
    "brunton-self-control-1811_spine-orig.JPG",
    "brunton-self-control-1811_title.jpg"
  ],
  "buat-nancay-origines-1757": [
    "buat-nancay-origines-1757_plate.JPG",
    "buat-nancay-origines-1757_spine-orig.JPG",
    "buat-nancay-origines-1757_title01.JPG",
    "buat-nancay-origines-1757_title02.JPG"
  ],
  "burney-wanderer-1814": [
    "burney-wanderer-1814_endpapers.JPG",
    "burney-wanderer-1814_extra01vol02.JPG",
    "burney-wanderer-1814_extra02vol02.JPG",
    "burney-wanderer-1814_spine-orig.JPG",
    "burney-wanderer-1814_titlevol02.JPG"
  ],
  "butler-hudibras-1744": [
    "butler-hudibras-1744_extra01.JPG",
    "butler-hudibras-1744_extra02.JPG",
    "butler-hudibras-1744_plate.JPG",
    "butler-hudibras-1744_spine-crop.png",
    "butler-hudibras-1744_spine-orig.JPG",
    "butler-hudibras-1744_titlevol01.JPG",
    "butler-hudibras-1744_titlevol02.JPG"
  ],
  "catiforo-vita-1781": [
    "catiforo-vita-1781_endpapers.JPG",
    "catiforo-vita-1781_spine-orig.JPG",
    "catiforo-vita-1781_title.JPG",
    "IMG_5394.JPG"
  ],
  "chiari-storia-1758": [
    "chiari-storia-1758_plate.JPG",
    "chiari-storia-1758_spine-orig.JPG",
    "chiari-storia-1758_title.JPG"
  ],
  "courtial-piete-1784": [
    "courtial-piete-1784_plate.JPG",
    "courtial-piete-1784_spine-orig.JPG",
    "courtial-piete-1784_title.JPG"
  ],
  "crebillon-lettres-1749": [
    "crebillon-lettres-1749_plate.JPG",
    "crebillon-lettres-1749_spine-orig.JPG",
    "crebillon-lettres-1749_title01.JPG",
    "crebillon-lettres-1749_title02.JPG"
  ],
  "desenfans-deux-1773": [
    "desenfans-deux-1773_endpapers.JPG",
    "desenfans-deux-1773_plate.JPG",
    "desenfans-deux-1773_spine-crop.png",
    "desenfans-deux-1773_spine-orig.JPG",
    "desenfans-deux-1773_title.JPG"
  ],
  "desforges-l'epreuve-1785": [
    "desforges-l'epreuve-1785_plate.jpg",
    "desforges-l'epreuve-1785_spine-orig.JPG",
    "desforges-l'epreuve-1785_title.JPG"
  ],
  "dezallier-voyage-1779": [
    "dezallier-voyage-1779_endpapers.JPG",
    "dezallier-voyage-1779_spine-orig.JPG",
    "dezallier-voyage-1779_title01.JPG",
    "dezallier-voyage-1779_title02.JPG"
  ],
  "dubos-reflexions-1746": [
    "dubos-reflexions-1746_endpapers.JPG",
    "dubos-reflexions-1746_spine-orig.JPG",
    "dubos-reflexions-1746_title01.JPG",
    "dubos-reflexions-1746_title02.JPG"
  ],
  "echard-dictionnaire-1758": [
    "echard-dictionnaire-1758_extra01.JPG",
    "echard-dictionnaire-1758_plate.JPG",
    "echard-dictionnaire-1758_spine-orig.JPG",
    "echard-dictionnaire-1758_title.JPG"
  ],
  "edgeworth-patronage-1814": [
    "edgeworth-patronage-1814_margin01vol02.JPG",
    "edgeworth-patronage-1814_plate.JPG",
    "edgeworth-patronage-1814_spine-orig.JPG",
    "edgeworth-patronage-1814_titlevol01.jpg"
  ],
  "edgeworth-tales-1809": [
    "edgeworth-tales-1809_margin01vol01.JPG",
    "edgeworth-tales-1809_plate.JPG",
    "edgeworth-tales-1809_spine-orig.JPG",
    "edgeworth-tales-1809_titlevol01.JPG",
    "edgeworth-tales-1809_titlevol04.JPG"
  ],
  "elie-lettres-1764": [
    "elie-lettres-1764_plate.JPG",
    "elie-lettres-1764_spine-orig.JPG",
    "elie-lettres-1764_title01.JPG",
    "elie-lettres-1764_title02.JPG"
  ],
  "eon-letters-1764": [
    "eon-letters-1764_plate.jpg",
    "eon-letters-1764_spine-crop.png",
    "eon-letters-1764_spine-orig.JPG",
    "eon-letters-1764_title.jpg"
  ],
  "evremond-oeuvres-1739": [
    "evremond-oeuvres-1739_margin01vol01.JPG",
    "evremond-oeuvres-1739_plate.JPG",
    "evremond-oeuvres-1739_spine-orig.JPG",
    "evremond-oeuvres-1739_titlevol01.JPG",
    "evremond-oeuvres-1739_titlevol02.JPG",
    "evremond-oeuvres-1739_titlevol03.JPG",
    "evremond-oeuvres-1739_titlevol04.JPG",
    "evremond-oeuvres-1739_titlevol05.JPG",
    "evremond-oeuvres-1739_titlevol06.JPG",
    "evremond-oeuvres-1739_titlevol07.JPG"
  ],
  "fischietti-semiramide-1759": [
    "fischietti-semiramide-1759_endpapers.JPG",
    "fischietti-semiramide-1759_spine-orig.JPG",
    "fischietti-semiramide-1759_title.JPG"
  ],
  "fontenelle-oeuvres-1754": [
    "fontenelle-oeuvres-1754_endpapers.JPG",
    "fontenelle-oeuvres-1754_spine-orig.JPG",
    "fontenelle-oeuvres-1754_titlevol01.JPG",
    "fontenelle-oeuvres-1754_titlevol02.JPG",
    "fontenelle-oeuvres-1754_titlevol03.JPG",
    "fontenelle-oeuvres-1754_titlevol04.JPG",
    "fontenelle-oeuvres-1754_titlevol05.JPG",
    "fontenelle-oeuvres-1754_titlevol06.JPG"
  ],
  "frederick": [
    {},
    {},
    {},
    {}
  ],
  "genlis-adele-1782": [
    "genlis-adele-1782_endpapers.JPG",
    "genlis-adele-1782_spine-orig.JPG",
    "genlis-adele-1782_title.JPG"
  ],
  "genlis-veillees-1784": [
    "genlis-veillees-1784_plate.JPG",
    "genlis-veillees-1784_spine-orig.JPG",
    "genlis-veillees-1784_title01vol01.JPG",
    "genlis-veillees-1784_title02vol01.JPG"
  ],
  "hales-statica-1750": [
    "hales-statica-1750_extra01vol01.JPG",
    "hales-statica-1750_extra02vol01.JPG",
    "hales-statica-1750_extra03vol02.JPG",
    "hales-statica-1750_extra04vol02.JPG",
    "hales-statica-1750_extra05vol02.JPG",
    "hales-statica-1750_extra06vol02.JPG",
    "hales-statica-1750_plate.JPG",
    "hales-statica-1750_spine-orig.JPG",
    "hales-statica-1750_title01vol01.JPG",
    "hales-statica-1750_title02vol01.JPG"
  ],
  "hamilton-memoires-1746": [
    "hamilton-memoires-1746_plate.JPG",
    "hamilton-memoires-1746_spine-orig.JPG",
    "hamilton-memoires-1746_title.JPG"
  ],
  "helvetius-l'esprit-1759": [
    "helvetius-l'esprit-1759_plate.JPG",
    "helvetius-l'esprit-1759_spine-orig.JPG",
    "helvetius-l'esprit-1759_titlevol01.JPG",
    "helvetius-l'esprit-1759_titlevol02.JPG"
  ],
  "henault-nouvel-1774": [
    "henault-nouvel-1774_plate.JPG",
    "henault-nouvel-1774_spine-orig.JPG",
    "henault-nouvel-1774_titlevol01.JPG",
    "henault-nouvel-1774_titlevol02.JPG",
    "henault-nouvel-1774_titlevol03.JPG"
  ],
  "hubner-geographie-1773": [
    "hubner-geographie-1773_endpapers.JPG",
    "hubner-geographie-1773_spine-orig.JPG",
    "hubner-geographie-1773_title.JPG"
  ],
  "laporte-france-1769": [
    "laporte-france-1769_plate.JPG",
    "laporte-france-1769_spine-orig.JPG",
    "laporte-france-1769_titlevol01.JPG",
    "laporte-france-1769_titlevol02.jpg"
  ],
  "leroy-examen-1760": [
    "leroy-examen-1760_plate.JPG",
    "leroy-examen-1760_spine-orig.JPG",
    "leroy-examen-1760_title.JPG"
  ],
  "limbourg-amusemens-1782": [
    "limbourg-amusemens-1782_endpapers.JPG",
    "limbourg-amusemens-1782_spine-orig.JPG",
    "limbourg-amusemens-1782_title.JPG"
  ],
  "marmontel-belisaire-1767": [
    "marmontel-belisaire-1767_margin01.JPG",
    "marmontel-belisaire-1767_margin02.JPG",
    "marmontel-belisaire-1767_margin03.JPG",
    "marmontel-belisaire-1767_margin04.JPG",
    "marmontel-belisaire-1767_margin05.JPG",
    "marmontel-belisaire-1767_margin06.JPG",
    "marmontel-belisaire-1767_margin07.JPG",
    "marmontel-belisaire-1767_plate.JPG",
    "marmontel-belisaire-1767_spine-orig.JPG",
    "marmontel-belisaire-1767_title01.JPG",
    "marmontel-belisaire-1767_title02.JPG"
  ],
  "marmontel-contes-1783": [
    "marmontel-contes-1783_plate.JPG",
    "marmontel-contes-1783_spine-orig.JPG",
    "marmontel-contes-1783_title01.JPG",
    "marmontel-contes-1783_title02.JPG"
  ],
  "marmontel-incas-1777": [
    "marmontel-incas-1777_plate.JPG",
    "marmontel-incas-1777_spine-orig.JPG",
    "marmontel-incas-1777_titlevol01.JPG"
  ],
  "mathurin-memoirs-1757": [
    "mathurin-memoirs-1757-margin01vol01.JPG",
    "mathurin-memoirs-1757_margin02vol01.JPG",
    "mathurin-memoirs-1757_margin03vol01.JPG",
    "mathurin-memoirs-1757_margin04vol01.JPG",
    "mathurin-memoirs-1757_margin05vol01.JPG",
    "mathurin-memoirs-1757_margin06vol01.JPG",
    "mathurin-memoirs-1757_margin07vol01.JPG",
    "mathurin-memoirs-1757_margin08vol01.JPG",
    "mathurin-memoirs-1757_margin09vol01.JPG",
    "mathurin-memoirs-1757_margin10vol01.JPG",
    "mathurin-memoirs-1757_margin11vol01.JPG",
    "mathurin-memoirs-1757_margin12vol01.JPG",
    "mathurin-memoirs-1757_margin13vol01.JPG",
    "mathurin-memoirs-1757_margin14vol01.JPG",
    "mathurin-memoirs-1757_margin15vol01.JPG",
    "mathurin-memoirs-1757_margin16vol01.JPG",
    "mathurin-memoirs-1757_margin17vol01.JPG",
    "mathurin-memoirs-1757_margin18vol01.JPG",
    "mathurin-memoirs-1757_margin19vol01.JPG",
    "mathurin-memoirs-1757_margin20vol01.JPG",
    "mathurin-memoirs-1757_margin21vol01.JPG",
    "mathurin-memoirs-1757_margin22vol01.JPG",
    "mathurin-memoirs-1757_margin23vol01.JPG",
    "mathurin-memoirs-1757_margin24vol02.JPG",
    "mathurin-memoirs-1757_margin25vol02.JPG",
    "mathurin-memoirs-1757_plate.JPG",
    "mathurin-memoirs-1757_spine-crop.png",
    "mathurin-memoirs-1757_spine-orig.JPG",
    "mathurin-memoirs-1757_titlevol01.JPG"
  ],
  "melchiori-storia-1758": [
    "melchiori-storia-1758_plate.JPG",
    "melchiori-storia-1758_spine-orig.JPG",
    "melchiori-storia-1758_title.JPG"
  ],
  "menard-collection-1752": [
    "menard-collection-1752_extra01.JPG",
    "menard-collection-1752_extra02.JPG",
    "menard-collection-1752_extra03.JPG",
    "menard-collection-1752_extra04.JPG",
    "menard-collection-1752_plate.JPG",
    "menard-collection-1752_spine-crop.png",
    "menard-collection-1752_spine-orig.JPG",
    "menard-collection-1752_title.JPG"
  ],
  "mercier-bonnet-1784": [
    "mercier-bonnet-1784_margin01.JPG",
    "mercier-bonnet-1784_spine-crop.png",
    "mercier-bonnet-1784_spine-orig.JPG",
    "mercier-bonnet-1784_title.JPG"
  ],
  "mercier-tableau-1782": [
    "mercier-tableau-1782_plate.JPG",
    "mercier-tableau-1782_spine-orig.JPG",
    "mercier-tableau-1782_titlevol01.JPG",
    "mercier-tableau-1782_titlevol02.JPG",
    "mercier-tableau-1782_titlevol03.JPG",
    "mercier-tableau-1782_titlevol04.JPG",
    "mercier-tableau-1782_titlevol05.JPG",
    "mercier-tableau-1782_titlevol06.JPG",
    "mercier-tableau-1782_titlevol07.JPG",
    "mercier-tableau-1782_titlevol08.JPG"
  ],
  "mercier-theatre-1778": [
    "mercier-theatre-1778_extra01vol01.JPG",
    "mercier-theatre-1778_extra02vol03.JPG",
    "mercier-theatre-1778_plate.JPG",
    "mercier-theatre-1778_spine-orig.JPG",
    "mercier-theatre-1778_title01vol01.JPG",
    "mercier-theatre-1778_title02vol01.JPG"
  ],
  "millot-elemens-1774": [
    "millot-elemens-1774_plate.JPG",
    "millot-elemens-1774_spine-orig.JPG",
    "millot-elemens-1774_title01.JPG",
    "millot-elemens-1774_title02.JPG"
  ],
  "mirabeau-l'ami-1758": [
    "mirabeau-l'ami-1758_plate.JPG",
    "mirabeau-l'ami-1758_spine-orig.JPG",
    "mirabeau-l'ami-1758_title01vol01.JPG",
    "mirabeau-l'ami-1758_title02vol01.JPG"
  ],
  "moliere-works-1755": [
    "moliere-works-1755_endpapers.JPG",
    "moliere-works-1755_extra01vol02.JPG",
    "moliere-works-1755_extra02vol03.JPG",
    "moliere-works-1755_extra03vol04.JPG",
    "moliere-works-1755_extra04vol04.JPG",
    "moliere-works-1755_extra05vol05.JPG",
    "moliere-works-1755_extra06vol06.JPG",
    "moliere-works-1755_extra07vol07.JPG",
    "moliere-works-1755_extra08vol08.JPG",
    "moliere-works-1755_extra09vol09.JPG",
    "moliere-works-1755_extra10vol10.JPG",
    "moliere-works-1755_spine-orig.JPG",
    "moliere-works-1755_titlevol01.JPG",
    "moliere-works-1755_titlevol02.JPG"
  ],
  "nares-thinks-1812": [
    "nares-thinks-1812_plate.JPG",
    "nares-thinks-1812_spine-orig.JPG",
    "nares-thinks-1812_title01vol01.JPG",
    "nares-thinks-1812_title02vol01.JPG"
  ],
  "orleans-fragmens-1788": [
    "orleans-fragmens-1788_plate.JPG",
    "orleans-fragmens-1788_spine-orig.JPG",
    "orleans-fragmens-1788_title01.JPG",
    "orleans-fragmens-1788_title02.JPG"
  ],
  "palissot-philosophes-1760": [
    "palissot-philosophes-1760_extra01.JPG",
    "palissot-philosophes-1760_plate.JPG",
    "palissot-philosophes-1760_spine-orig.JPG",
    "palissot-philosophes-1760_title01.JPG",
    "palissot-philosophes-1760_title02.JPG"
  ],
  "petrarca-rime-1748": [
    "petrarca-rime-1748_plate.JPG",
    "petrarca-rime-1748_spine-orig.JPG",
    "petrarca-rime-1748_title01.JPG",
    "petrarca-rime-1748_title02.JPG"
  ],
  "piganiol-delices-1728": [
    "piganiol-delices-1728_extra01.JPG",
    "piganiol-delices-1728_extra02.JPG",
    "piganiol-delices-1728_extra03.JPG",
    "piganiol-delices-1728_extra04.JPG",
    "piganiol-delices-1728_plate.JPG",
    "piganiol-delices-1728_spine-orig.JPG",
    "piganiol-delices-1728_titlevol01.JPG"
  ],
  "plumard-remarques-1754": [
    "plumard-remarques-1754_margin01.JPG",
    "plumard-remarques-1754_plate.JPG",
    "plumard-remarques-1754_spine-orig.JPG",
    "plumard-remarques-1754_title.JPG"
  ],
  "prevost-manuel-1755": [
    "prevost-manuel-1755_plate.JPG",
    "prevost-manuel-1755_spine-orig.JPG",
    "prevost-manuel-1755_titlevol01.JPG",
    "prevost-manuel-1755_titlevol02.JPG"
  ],
  "prevost-memoires-1745": [
    "prevost-memoires-1745_plate.JPG",
    "prevost-memoires-1745_spine-orig.JPG",
    "prevost-memoires-1745_title.JPG"
  ],
  "racine-oeuvres-1754": [
    "racine-oeuvres-1754_plate.JPG",
    "racine-oeuvres-1754_platevol02.JPG",
    "racine-oeuvres-1754_spine-orig.JPG",
    "racine-oeuvres-1754_title01vol01.JPG",
    "racine-oeuvres-1754_title02vol01.JPG",
    "racine-oeuvres-1754_titlevol02.JPG"
  ],
  "ramdohr-ueber-1787": [
    "ramdohr-ueber-1787_cover.JPG",
    "ramdohr-ueber-1787_plate.JPG",
    "ramdohr-ueber-1787_spine-orig.JPG",
    "ramdohr-ueber-1787_title.JPG"
  ],
  "rapin-histoire-1727": [
    "rapin-histoire-1727-extra04vol02.JPG",
    "rapin-histoire-1727_extra01vol01.JPG",
    "rapin-histoire-1727_extra02vol01.JPG",
    "rapin-histoire-1727_extra03vol01.JPG",
    "rapin-histoire-1727_extra04vol03.JPG",
    "rapin-histoire-1727_extra05vol03.JPG",
    "rapin-histoire-1727_extra06vol04.JPG",
    "rapin-histoire-1727_extra07vol05.JPG",
    "rapin-histoire-1727_extra08vol06.JPG",
    "rapin-histoire-1727_extra09vol07.JPG",
    "rapin-histoire-1727_extra10vol09.JPG",
    "rapin-histoire-1727_extra11vol10.JPG",
    "rapin-histoire-1727_plate.JPG",
    "rapin-histoire-1727_spine-crop.png",
    "rapin-histoire-1727_spine-orig.JPG",
    "rapin-histoire-1727_title01vol01.JPG",
    "rapin-histoire-1727_title02vol01.JPG"
  ],
  "riccoboni-lettres-1760": [
    "riccoboni-lettres-1760_endpapers.JPG",
    "riccoboni-lettres-1760_spine-orig.JPG",
    "riccoboni-lettres-1760_title.JPG"
  ],
  "richardson-history-1810": [
    "richardson-history-1810_plate.JPG",
    "richardson-history-1810_spine-orig.JPG",
    "richardson-history-1810_titlevol01.JPG"
  ],
  "richardson-traite-1728": [
    "richardson-traite-1728_extra01vol02.JPG",
    "richardson-traite-1728_plate.JPG",
    "richardson-traite-1728_spine-orig.JPG",
    "richardson-traite-1728_titlevol01.JPG",
    "richardson-traite-1728_titlevol02.JPG"
  ],
  "rollin-histoire-1740": [
    "rollin-histoire-1740_plate.JPG",
    "rollin-histoire-1740_spine-orig.JPG",
    "rollin-histoire-1740_title01vol01.JPG",
    "rollin-histoire-1740_title02vol01.JPG"
  ],
  "rousseau-oeuvres-1774": [
    "rousseau-oeuvres-1774_extra01vol01.JPG",
    "rousseau-oeuvres-1774_extra02vol01.JPG",
    "rousseau-oeuvres-1774_extra03vol09.JPG",
    "rousseau-oeuvres-1774_extra04.JPG",
    "rousseau-oeuvres-1774_extra05.JPG",
    "rousseau-oeuvres-1774_extra06.JPG",
    "rousseau-oeuvres-1774_plate.JPG",
    "rousseau-oeuvres-1774_spine-crop_1.png",
    "rousseau-oeuvres-1774_spine-crop_2.png",
    "rousseau-oeuvres-1774_spine-orig.JPG",
    "rousseau-oeuvres-1774_title01vol01.JPG",
    "rousseau-oeuvres-1774_title02vol01.JPG",
    "rousseau-oeuvres-1774_titlevol02.JPG",
    "rousseau-oeuvres-1774_titlevol03.JPG",
    "rousseau-oeuvres-1774_titlevol04.JPG"
  ],
  "sage-diable-1755": [
    "sage-diable-1755_endpapers.JPG",
    "sage-diable-1755_spine-orig.JPG",
    "sage-diable-1755_title01.JPG",
    "sage-diable-1755_title02.JPG"
  ],
  "schade-pocket-1816": [
    "schade-pocket-1816-endpapers.JPG",
    "schade-pocket-1816_plate.JPG",
    "schade-pocket-1816_spine-orig.JPG",
    "schade-pocket-1816_title.jpg"
  ],
  "scott-lady-1810": [
    "scott-lady-1810_endpapers.JPG",
    "scott-lady-1810_plate.JPG",
    "scott-lady-1810_spine-orig.JPG",
    "scott-lady-1810_title.JPG"
  ],
  "scott-marmion-1810": [
    "scott-marmion-1810_plate.JPG",
    "scott-marmion-1810_spine-orig.JPG",
    "scott-marmion-1810_title01vol01.JPG",
    "scott-marmion-1810_title02vol01.JPG",
    "scott-marmion-1810_titlevol02.JPG"
  ],
  "sevigne-recueil-1785": [
    "sevigne-recueil-1785_plate.JPG",
    "sevigne-recueil-1785_spine-orig.JPG",
    "sevigne-recueil-1785_title01vol01.JPG",
    "sevigne-recueil-1785_title02vol01.JPG",
    "sevigne-recueil-1785_titlevol02.JPG",
    "sevigne-recueil-1785_titlevol09.JPG"
  ],
  "soave-novelle-1806": [
    "soave-novelle-1806_plate.JPG",
    "soave-novelle-1806_spine-orig.JPG",
    "soave-novelle-1806_title.JPG"
  ],
  "stanyan-grecian-1751": [
    "stanyan-grecian-1751_plate.JPG",
    "stanyan-grecian-1751_spine-crop.png",
    "stanyan-grecian-1751_spine-orig.JPG",
    "stanyan-grecian-1751_titlevol01.JPG",
    "stanyan-grecian-1751_titlevol02.JPG"
  ],
  "statius-thebaid-1767": [
    "statius-thebaid-1767-titlevol02.JPG",
    "statius-thebaid-1767_extra01.JPG",
    "statius-thebaid-1767_plate.JPG",
    "statius-thebaid-1767_spine-crop.png",
    "statius-thebaid-1767_spine-orig.JPG",
    "statius-thebaid-1767_titlevol01.JPG"
  ],
  "tasso-aminta-1729": [
    "tasso-aminta-1729_plate.JPG",
    "tasso-aminta-1729_spine-crop.png",
    "tasso-aminta-1729_spine-orig.JPG",
    "tasso-aminta-1729_title.JPG"
  ],
  "torcy-memoirs-1757": [
    "torcy-memoirs-1757_endpapers.JPG",
    "torcy-memoirs-1757_plate.JPG",
    "torcy-memoirs-1757_spine-crop.png",
    "torcy-memoirs-1757_spine-orig.JPG",
    "torcy-memoirs-1757_title.JPG"
  ],
  "trublet-essais-1735": [
    "trublet-essais-1735_plate.JPG",
    "trublet-essais-1735_spine-orig.JPG",
    "trublet-essais-1735_title.JPG"
  ],
  "unlisted-nouveau-1660": [
    "unlisted-nouveau-1660_endpapers.JPG",
    "unlisted-nouveau-1660_spine-orig.JPG",
    "unlisted-nouveau-1660_title.JPG"
  ],
  "vertot-histoire-1720": [
    "vertot-histoire-1720_plate.JPG",
    "vertot-histoire-1720_spine-orig.JPG",
    "vertot-histoire-1720_title.JPG"
  ],
  "veyssiere-abrege-1755": [
    "veyssiere-abrege-1755_plate.JPG",
    "veyssiere-abrege-1755_spine-orig.JPG",
    "veyssiere-abrege-1755_title01.JPG",
    "veyssiere-abrege-1755_title02.JPG"
  ],
  "voltaire": [
    ""
  ],
  "voltaire-charles-1770": [
    "voltaire-charles-1770_plate.JPG",
    "voltaire-charles-1770_spine-orig.JPG",
    "voltaire-charles-1770_title01.JPG",
    "voltaire-charles-1770_title02.JPG"
  ],
  "voltaire-contes-1770": [
    "voltaire-contes-1770_plate.JPG",
    "voltaire-contes-1770_spine-orig.JPG",
    "voltaire-contes-1770_title01.JPG",
    "voltaire-contes-1770_title02.JPG"
  ],
  "voltaire-essai-1771": [
    "voltaire-essai-1771_plate.JPG",
    "voltaire-essai-1771_spine-orig.JPG",
    "voltaire-essai-1771_title01.JPG",
    "voltaire-essai-1771_title02.JPG"
  ],
  "voltaire-henriade-1770": [
    "voltaire-henriade-1770_plate.JPG",
    "voltaire-henriade-1770_spine-orig.JPG",
    "voltaire-henriade-1770_title01.JPG",
    "voltaire-henriade-1770_title02.JPG"
  ],
  "voltaire-histoire-1771": [
    "voltaire-histoire-1771_plate.JPG",
    "voltaire-histoire-1771_spine-orig.JPG",
    "voltaire-histoire-1771_title01.JPG",
    "voltaire-histoire-1771_title02.JPG"
  ],
  "voltaire-lewis-1752": [
    "voltaire-lewis-1752_extra01vol02.JPG",
    "voltaire-lewis-1752_plate.JPG",
    "voltaire-lewis-1752_spine-orig.JPG",
    "voltaire-lewis-1752_titlevol01.JPG",
    "voltaire-lewis-1752_titlevol02.JPG"
  ],
  "voltaire-loix-1773": [
    "voltaire-loix-1773_plate.JPG",
    "voltaire-loix-1773_spine-orig.JPG",
    "voltaire-loix-1773_title01.JPG",
    "voltaire-loix-1773_title02.JPG"
  ],
  "voltaire-melanges-1770": [
    "voltaire-melanges-1770_extra01.JPG",
    "voltaire-melanges-1770_plate.JPG",
    "voltaire-melanges-1770_spine-orig.JPG",
    "voltaire-melanges-1770_title.JPG"
  ],
  "voltaire-nouveaux-1770": [
    "voltaire-nouveaux-1770_plate.JPG",
    "voltaire-nouveaux-1770_spine-orig.JPG",
    "voltaire-nouveaux-1770_title01.JPG",
    "voltaire-nouveaux-1770_title01vol02.JPG",
    "voltaire-nouveaux-1770_title01vol03.JPG",
    "voltaire-nouveaux-1770_title01vol04.JPG",
    "voltaire-nouveaux-1770_title01vol05.JPG",
    "voltaire-nouveaux-1770_title02.JPG"
  ],
  "voltaire-philosophie-1770": [
    "voltaire-philosophie-1770_plate.JPG",
    "voltaire-philosophie-1770_spine-orig.JPG",
    "voltaire-philosophie-1770_title01.JPG",
    "voltaire-philosophie-1770_title02.JPG"
  ],
  "voltaire-pierre-1765": [
    "voltaire-pierre-1765_plate.JPG",
    "voltaire-pierre-1765_platevol01.JPG",
    "voltaire-pierre-1765_spine-orig.JPG",
    "voltaire-pierre-1765_title01vol01.JPG",
    "voltaire-pierre-1765_title01vol02.JPG",
    "voltaire-pierre-1765_title02vol01.JPG",
    "voltaire-pierre-1765_title02vol02.JPG"
  ],
  "voltaire-poesies-1770": [
    "voltaire-poesies-1770_extra01.JPG",
    "voltaire-poesies-1770_plate.JPG",
    "voltaire-poesies-1770_spine-orig.JPG",
    "voltaire-poesies-1770_title.JPG"
  ],
  "voltaire-pucelle-1771": [
    "voltaire-pucelle-1771_plate.JPG",
    "voltaire-pucelle-1771_spine-orig.JPG",
    "voltaire-pucelle-1771_title01.JPG",
    "voltaire-pucelle-1771_title02.JPG"
  ],
  "voltaire-questions-1771": [
    "voltaire-questions-1771_plate.JPG",
    "voltaire-questions-1771_spine-orig.JPG",
    "voltaire-questions-1771_title.JPG"
  ],
  "voltaire-raison-1770": [
    "voltaire-raison-1770_plate.JPG",
    "voltaire-raison-1770_spine-orig.JPG",
    "voltaire-raison-1770_title01.JPG",
    "voltaire-raison-1770_title02.JPG"
  ],
  "voltaire-siecle-1771": [
    "voltaire-siecle-1771_platevol01.JPG",
    "voltaire-siecle-1771_platevol03.JPG",
    "voltaire-siecle-1771_platevol04.JPG",
    "voltaire-siecle-1771_spine-orig.JPG",
    "voltaire-siecle-1771_title01vol01.JPG",
    "voltaire-siecle-1771_title01vol02.JPG",
    "voltaire-siecle-1771_title01vol03.JPG",
    "voltaire-siecle-1771_title01vol04.JPG",
    "voltaire-siecle-1771_title02vol01.JPG",
    "voltaire-siecle-1771_title02vol02.JPG",
    "voltaire-siecle-1771_title02vol03.JPG",
    "voltaire-siecle-1771_title02vol04.JPG"
  ],
  "voltaire-theatre-1770": [
    "voltaire-theatre-1770_plate.JPG",
    "voltaire-theatre-1770_spine-orig.JPG",
    "voltaire-theatre-1770_title01.JPG",
    "voltaire-theatre-1770_title02.JPG"
  ],
  "wielland-histoire-1777": [
    "wielland-histoire-1777_plate.JPG",
    "wielland-histoire-1777_spine-orig.JPG",
    "wielland-histoire-1777_title.JPG"
  ],
  "addison-guardian-1760": [
    "addison-guardian-1760_marginvol02.JPG",
    "addison-guardian-1760_plate.JPG",
    "addison-guardian-1760_spine-origvol02.JPG",
    "addison-guardian-1760_spine-origvol1.JPG",
    "addison-guardian-1760_titlevol01.JPG",
    "addison-guardian-1760_titlevol02.JPG"
  ],
  "addison-spectator-1757": [
    "addison-spectator-1757_plate.JPG",
    "addison-spectator-1757_spine-origvol01.JPG",
    "addison-spectator-1757_spine-origvol02.JPG",
    "addison-spectator-1757_spine-origvol03.JPG",
    "addison-spectator-1757_spine-origvol04.JPG",
    "addison-spectator-1757_spine-origvol05.JPG",
    "addison-spectator-1757_spine-origvol06.JPG",
    "addison-spectator-1757_spine-origvol07.JPG",
    "addison-spectator-1757_spine-origvol08.JPG",
    "addison-spectator-1757_titlevol01.JPG",
    "addison-spectator-1757_titlevol02.JPG",
    "addison-spectator-1757_titlevol03.JPG",
    "addison-spectator-1757_titlevol04.JPG",
    "addison-spectator-1757_titlevol05.JPG",
    "addison-spectator-1757_titlevol06.JPG",
    "addison-spectator-1757_titlevol07.JPG",
    "addison-spectator-1757_titlevol08.JPG"
  ],
  "addison-tatler-1737": [
    "addison-tatler-1737_marginvol03.JPG",
    "addison-tatler-1737_plate.JPG",
    "addison-tatler-1737_spine-origvol01.JPG",
    "addison-tatler-1737_spine-origvol02.JPG",
    "addison-tatler-1737_spine-origvol03.JPG",
    "addison-tatler-1737_spine-origvol04.JPG",
    "addison-tatler-1737_titlevol01.JPG",
    "addison-tatler-1737_titlevol02.JPG",
    "addison-tatler-1737_titlevol03.JPG",
    "addison-tatler-1737_titlevol04.JPG"
  ],
  "addison-works-1721": [
    "addison-works-1721_plate.JPG",
    "addison-works-1721_spine-origvol01.JPG",
    "addison-works-1721_spine-origvol02.JPG",
    "addison-works-1721_spine-origvol03.JPG",
    "addison-works-1721_spine-origvol04.JPG",
    "addison-works-1721_titlevol01.jpg",
    "addison-works-1721_titlevol02.JPG",
    "addison-works-1721_titlevol03.JPG",
    "addison-works-1721_titlevol04.JPG"
  ],
  "akenside-museum-1746": [
    "akenside-museum-1746_plate.JPG",
    "akenside-museum-1746_spine-orig.JPG",
    "akenside-museum-1746_title.JPG"
  ],
  "akenside-poems-1772": [
    "akenside-poems-1772_cover.jpg",
    "akenside-poems-1772_plate.jpg",
    "akenside-poems-1772_spine-orig.pdf",
    "akenside-poems-1772_title.png"
  ],
  "aler-gradus-1713": [
    "aler-gradus-1713_plate.JPG",
    "aler-gradus-1713_spine-orig.JPG",
    "aler-gradus-1713_title.JPG"
  ],
  "alison-history-1833": [
    "alison-history-1833_plate.JPG",
    "alison-history-1833_spine-origvol01.JPG",
    "alison-history-1833_spine-origvol02.JPG",
    "alison-history-1833_spine-origvol03.JPG",
    "alison-history-1833_spine-origvol04.JPG",
    "alison-history-1833_spine-origvol05.JPG",
    "alison-history-1833_spine-origvol06.JPG",
    "alison-history-1833_spine-origvol07.JPG",
    "alison-history-1833_spine-origvol08.JPG",
    "alison-history-1833_spine-origvol09.JPG",
    "alison-history-1833_spine-origvol10.JPG",
    "alison-history-1833_title01vol01.JPG",
    "alison-history-1833_title02vol01.JPG",
    "alison-history-1833_titlevol02.JPG",
    "alison-history-1833_titlevol03.JPG",
    "alison-history-1833_titlevol04.JPG",
    "alison-history-1833_titlevol05.JPG",
    "alison-history-1833_titlevol06.JPG",
    "alison-history-1833_titlevol07.JPG",
    "alison-history-1833_titlevol08.JPG",
    "alison-history-1833_titlevol09.JPG",
    "alison-history-1833_titlevol10.JPG"
  ],
  "anderson-royal-1736": [
    "anderson-royal-1736_plate.JPG",
    "anderson-royal-1736_spine-orig.JPG",
    "anderson-royal-1736_title.JPG"
  ],
  "anstey-new-1766": [
    "anstey-new-1766_plate.JPG",
    "anstey-new-1766_spine-orig.JPG",
    "anstey-new-1766_title.JPG"
  ],
  "bailey-dictionarium-1717": [
    "bailey-dictionarium-1717_plate.JPG",
    "bailey-dictionarium-1717_spine-orig.JPG",
    "bailey-dictionarium-1717_title.JPG"
  ],
  "baker-chronicle-1684": [
    "baker-chronicle-1684_plate.JPG",
    "baker-chronicle-1684_spine-orig.JPG",
    "baker-chronicle-1684_title.JPG"
  ],
  "barnes-anacreon-1705": [
    "barnes-anacreon-1705_plate.JPG",
    "barnes-anacreon-1705_spine-orig.JPG",
    "barnes-anacreon-1705_title.JPG"
  ],
  "barwick-vita-1721": [
    "barwick-vita-1721_extra.JPG",
    "barwick-vita-1721_margin.JPG",
    "barwick-vita-1721_spine-orig.JPG",
    "barwick-vita-1721_title.JPG"
  ],
  "batteux-beaux-1747": [
    "batteux-beaux-1747_plate.JPG",
    "batteux-beaux-1747_spine-orig.JPG",
    "batteux-beaux-1747_title.JPG"
  ],
  "bayle-general-1734": [
    "bayle-general-1734_plate.JPG",
    "bayle-general-1734_spine-origvol01.JPG",
    "bayle-general-1734_spine-origvol02.JPG",
    "bayle-general-1734_spine-origvol03.JPG",
    "bayle-general-1734_spine-origvol04.JPG",
    "bayle-general-1734_spine-origvol05.JPG",
    "bayle-general-1734_spine-origvol06.JPG",
    "bayle-general-1734_spine-origvol07.JPG",
    "bayle-general-1734_spine-origvol08.JPG",
    "bayle-general-1734_spine-origvol09.JPG",
    "bayle-general-1734_spine-origvol10.JPG",
    "bayle-general-1734_titlevol01.JPG",
    "bayle-general-1734_titlevol02.JPG",
    "bayle-general-1734_titlevol03.JPG",
    "bayle-general-1734_titlevol04.JPG",
    "bayle-general-1734_titlevol05.JPG",
    "bayle-general-1734_titlevol06.JPG",
    "bayle-general-1734_titlevol07.JPG",
    "bayle-general-1734_titlevol08.JPG",
    "bayle-general-1734_titlevol09.JPG",
    "bayle-general-1734_titlevol10.JPG"
  ],
  "beattie-essay-1773": [
    "beattie-essay-1773_plate.JPG",
    "beattie-essay-1773_spine-orig.JPG",
    "beattie-essay-1773_title.JPG"
  ],
  "beckford-thoughts-1798": [
    "beckford-thoughts-1798_spine-orig.JPG",
    "beckford-thoughts-1798_title.JPG"
  ],
  "beze-psalmorum-1581": [
    "beze-psalmorum-1581_plate.JPG",
    "beze-psalmorum-1581_spine-orig.JPG",
    "beze-psalmorum-1581_title.JPG"
  ],
  "bigland-sketch-1810": [
    "bigland-sketch-1810_platevol01.JPG",
    "bigland-sketch-1810_platevol02.JPG",
    "bigland-sketch-1810_spine-origvol02.JPG",
    "bigland-sketch-1810_sping-origvol01.JPG",
    "bigland-sketch-1810_titlevol01.JPG",
    "bigland-sketch-1810_titlevol02.JPG"
  ],
  "blackwall-introduction-1719": [
    "blackwall-introduction-1719_plate.JPG",
    "blackwall-introduction-1719_spine-orig.JPG",
    "blackwall-introduction-1719_title.JPG"
  ],
  "blair-lectures-1809": [
    "blair-lectures-1809_platevol01.JPG",
    "blair-lectures-1809_platevol02.JPG",
    "blair-lectures-1809_platevol03.JPG",
    "blair-lectures-1809_spine-origvol01.JPG",
    "blair-lectures-1809_spine-origvol02.JPG",
    "blair-lectures-1809_spine-origvol03.JPG",
    "blair-lectures-1809_titlevol01.JPG",
    "blair-lectures-1809_titlevol03.JPG"
  ],
  "blair-sermons-1801": [
    "blair-sermons-1801_platevol01.JPG",
    "blair-sermons-1801_platevol02.JPG",
    "blair-sermons-1801_platevol03.JPG",
    "blair-sermons-1801_platevol04.JPG",
    "blair-sermons-1801_platevol05.JPG",
    "blair-sermons-1801_spine-origvol01.JPG",
    "blair-sermons-1801_spine-origvol02.JPG",
    "blair-sermons-1801_spine-origvol03.JPG",
    "blair-sermons-1801_spine-origvol04.JPG",
    "blair-sermons-1801_spine-origvol05.JPG",
    "blair-sermons-1801_titlevol01.JPG",
    "blair-sermons-1801_titlevol02.JPG",
    "blair-sermons-1801_titlevol03.JPG",
    "blair-sermons-1801_titlevol04.JPG",
    "blair-sermons-1801_titlevol05.JPG"
  ],
  "bolingbroke-remarks-1743": [
    "bolingbroke-remarks-1743_plate.JPG",
    "bolingbroke-remarks-1743_spine-orig.JPG",
    "bolingbroke-remarks-1743_title.JPG"
  ],
  "bourne-musae-1741": [
    "bourne-musae-1741_platevol01.JPG",
    "bourne-musae-1741_platevol02.JPG",
    "bourne-musae-1741_platevol03.JPG",
    "bourne-musae-1741_spine-origvol01.JPG",
    "bourne-musae-1741_spine-origvol02.JPG",
    "bourne-musae-1741_spine-origvol03.JPG",
    "bourne-musae-1741_titlevol01.JPG",
    "bourne-musae-1741_titlevol02.JPG",
    "bourne-musae-1741_titlevol03.JPG"
  ],
  "bourne-poematia-1743": [
    "bourne-poematia-1743_plate.JPG",
    "bourne-poematia-1743_spine-orig.JPG",
    "bourne-poematia-1743_title.JPG"
  ],
  "boyer-dictionnaire-1783": [
    "boyer-dictionnaire-1783_platevol01.JPG",
    "boyer-dictionnaire-1783_platevol02.JPG",
    "boyer-dictionnaire-1783_spine-origvol01.JPG",
    "boyer-dictionnaire-1783_spine-origvol02.JPG",
    "boyer-dictionnaire-1783_title01vol01.JPG",
    "boyer-dictionnaire-1783_title01vol02.JPG",
    "boyer-dictionnaire-1783_title02vol01.JPG",
    "boyer-dictionnaire-1783_title02vol02.JPG"
  ],
  "bradley-new-1717": [
    "bradley-new-1717_plate.JPG",
    "bradley-new-1717_spine-orig.tif",
    "bradley-new-1717_title.JPG",
    "bradley-new-1717_title.tif"
  ],
  "brewster-natural-1833": [
    "brewster-natural-1833_cover.JPG",
    "brewster-natural-1833_extra.JPG",
    "brewster-natural-1833_spine-orig.JPG"
  ],
  "brown-estimate-1757": [
    "brown-estimate-1757_platevol01.JPG",
    "brown-estimate-1757_platevol02.JPG",
    "brown-estimate-1757_spine-origvol01.JPG",
    "brown-estimate-1757_spine-origvol02.JPG",
    "brown-estimate-1757_titlevol01.JPG",
    "brown-estimate-1757_titlevol02.JPG"
  ],
  "bryant-treatise-1792": [
    "bryant-treatise-1792_endpapers.JPG",
    "bryant-treatise-1792_extra.JPG",
    "bryant-treatise-1792_spine-orig.JPG",
    "bryant-treatise-1792_title01.JPG",
    "bryant-treatise-1792_title02.JPG"
  ],
  "brydone-tour-1773": [
    "brydone-tour-1773_platevol01.JPG",
    "brydone-tour-1773_platevol02.JPG",
    "brydone-tour-1773_spine-origvol01.JPG",
    "brydone-tour-1773_spine-origvol02.JPG",
    "brydone-tour-1773_spine-origvols01to02.JPG",
    "brydone-tour-1773_titlevol01.JPG",
    "brydone-tour-1773_titlevol02.JPG"
  ],
  "buchanan-respublica-1627": [
    "buchanan-respublica-1627_plate.JPG",
    "buchanan-respublica-1627_spine-orig.JPG",
    "buchanan-respublica-1627_title.JPG"
  ],
  "bull-works-1725": [
    "bull-works-1725_platevol01.JPG",
    "bull-works-1725_spine-origvol01.JPG",
    "bull-works-1725_spine-origvol02.JPG",
    "bull-works-1725_titlevol01.JPG",
    "bull-works-1725_titlevol02.JPG"
  ],
  "burkitt-expository-1749": [
    "burkitt-expository-1749_plate.JPG",
    "burkitt-expository-1749_spine-orig.JPG",
    "burkitt-expository-1749_title.JPG"
  ],
  "burnet-bishop-1724": [
    "burnet-bishop-1724_platevol01.JPG",
    "burnet-bishop-1724_platevol02.JPG",
    "burnet-bishop-1724_spine-origvol01.JPG",
    "burnet-bishop-1724_spine-origvol02.JPG",
    "burnet-bishop-1724_titlevol01.JPG",
    "burnet-bishop-1724_titlevol02.JPG"
  ],
  "burnet-faith-1728": [
    "burnet-faith-1728_spine-orig.JPG",
    "burnet-faith-1728_title01.JPG",
    "burnet-faith-1728_title02.JPG"
  ],
  "burnet-vindication-1724": [
    "burnet-vindication-1724_spine-orig.JPG",
    "burnet-vindication-1724_title01.JPG",
    "burnet-vindication-1724_title02.JPG"
  ],
  "butler-analogy-1736": [
    "butler-analogy-1736_plate.JPG",
    "butler-analogy-1736_spine-orig.JPG",
    "butler-analogy-1736_title01.JPG",
    "butler-analogy-1736_title02.JPG"
  ],
  "butler-genuine-1759": [
    "butler-genuine-1759_cover.jpg",
    "butler-genuine-1759_extra.jpg",
    "butler-genuine-1759_plate.jpg",
    "butler-genuine-1759_spine.jpg",
    "butler-genuine-1759_title.jpg"
  ],
  "caesar-caesaris-1661": [
    "caesar-caesaris-1661_extra.JPG",
    "caesar-caesaris-1661_plate.JPG",
    "caesar-caesaris-1661_spine-orig.JPG",
    "caesar-caesaris-1661_title.JPG"
  ],
  "calcott-thoughts-1756": [
    "calcott-thoughts-1756_extra.JPG",
    "calcott-thoughts-1756_plate.JPG",
    "calcott-thoughts-1756_spine-orig.JPG",
    "calcott-thoughts-1756_title.JPG"
  ],
  "campan-memoirs-1824": [
    "campan-memoirs-1824_extravol01.JPG",
    "campan-memoirs-1824_platevol01.JPG",
    "campan-memoirs-1824_platevol02.JPG",
    "campan-memoirs-1824_spine-origvol01.JPG",
    "campan-memoirs-1824_spine-origvol01_titlevol02.JPG",
    "campan-memoirs-1824_spine-origvol02.JPG"
  ],
  "campbell-political-1774": [
    "campbell-political-1774_platevol01.JPG",
    "campbell-political-1774_platevol02.JPG",
    "campbell-political-1774_spine-origvol01.JPG",
    "campbell-political-1774_spine-origvol02.JPG",
    "campbell-political-1774_title01vol01.JPG",
    "campbell-political-1774_title01vol02.JPG",
    "campbell-political-1774_title02vol01.JPG",
    "campbell-political-1774_title02vol02.JPG"
  ],
  "carte-history-1747": [
    "carte-history-1747_platevol01.JPG",
    "carte-history-1747_platevol02.JPG",
    "carte-history-1747_platevol03.JPG",
    "carte-history-1747_platevol04.JPG",
    "carte-history-1747_spine-origvol01.JPG",
    "carte-history-1747_spine-origvol02.JPG",
    "carte-history-1747_spine-origvol03.JPG",
    "carte-history-1747_spine-origvol04.JPG",
    "carte-history-1747_titlevol01.JPG",
    "carte-history-1747_titlevol02.JPG",
    "carte-history-1747_titlevol03.JPG",
    "carte-history-1747_titlevol04.JPG"
  ],
  "castera-life-1798": [
    "castera-life-1798_spine-origvol01.JPG",
    "castera-life-1798_spine-origvol02.JPG",
    "castera-life-1798_titlevol01.JPG",
    "castera-life-1798_titlevol02.JPG"
  ],
  "catullus-catullus-1659": [
    "catullus-catullus-1659_spine-orig.JPG",
    "catullus-catullus-1659_title.JPG"
  ],
  "chamberlayne-magnae-1735": [
    "chamberlayne-magnae-1735_plate.JPG",
    "chamberlayne-magnae-1735_spine-orig.JPG",
    "chamberlayne-magnae-1735_title.JPG"
  ],
  "church-vidication-1750": [
    "church-vidication-1750_plate.JPG",
    "church-vidication-1750_spine-orig.JPG",
    "church-vidication-1750_title.JPG"
  ],
  "cicero-clavis-1735": [
    "cicero-clavis-1735_spine-orig.JPG",
    "cicero-clavis-1735_title.JPG"
  ],
  "cicero-morals-1744": [
    "cicero-morals-1744_plate.JPG",
    "cicero-morals-1744_spine-orig.JPG",
    "cicero-morals-1744_title.JPG"
  ],
  "cicero-officiis-1688": [
    "cicero-officiis-1688_cover.JPG",
    "cicero-officiis-1688_spine-orig.JPG",
    "cicero-officiis-1688_title.JPG"
  ],
  "cicero-orationes-1706": [
    "cicero-orationes-1706_margin.JPG",
    "cicero-orationes-1706_plate.JPG",
    "cicero-orationes-1706_spine-orig.JPG",
    "cicero-orationes-1706_title.JPG"
  ],
  "clarendon-life-1759": [
    "clarendon-life-1759_plate.JPG",
    "clarendon-life-1759_spine-orig.JPG",
    "clarendon-life-1759_title.JPG"
  ],
  "clarke-connexion-1767": [
    "clarke-connexion-1767_plate.JPG",
    "clarke-connexion-1767_spine-orig.JPG",
    "clarke-connexion-1767_title.JPG"
  ],
  "clarke-sermons-1742": [
    "clarke-sermons-1742_platevol01.JPG",
    "clarke-sermons-1742_platevol02.JPG",
    "clarke-sermons-1742_spine-origvol01.JPG",
    "clarke-sermons-1742_spine-origvol02.JPG",
    "clarke-sermons-1742_titlevol01.JPG",
    "clarke-sermons-1742_titlevol02.JPG"
  ],
  "claudianus-exstant-1677": [
    "claudianus-exstant-1677_spine-orig.JPG",
    "Darren Bevin - IMG_1278.JPG",
    "Darren Bevin - IMG_1279.JPG",
    "Darren Bevin - IMG_1280.JPG"
  ],
  "cockman-select-1750": [
    "cockman-select-1750_platevol01.JPG",
    "cockman-select-1750_platevol02.JPG",
    "cockman-select-1750_spine-origvol01.JPG",
    "cockman-select-1750_spine-origvol02.JPG",
    "cockman-select-1750_titlevol01.JPG",
    "cockman-select-1750_titlevol02.JPG"
  ],
  "cowper-poems-1782": [
    "cowper-poems-1782_margin01.jpg",
    "cowper-poems-1782_margin02.jpg",
    "cowper-poems-1782_plate.jpg",
    "cowper-poems-1782_spine-orig.jpg",
    "cowper-poems-1782_title01.jpg",
    "cowper-poems-1782_title02.jpg"
  ],
  "cumberland-accurate-1787": [
    "cumberland-accurate-1787_cover.JPG",
    "cumberland-accurate-1787_plate.jpg",
    "cumberland-accurate-1787_plate01.JPG",
    "cumberland-accurate-1787_plate02.JPG",
    "cumberland-accurate-1787_spine-orig.JPG",
    "cumberland-accurate-1787_title.jpg",
    "cumberland-accurate-1787_title01.JPG"
  ],
  "curione-thesaurus-1561": [
    "curione-thesaurus-1561_platevol01.JPG",
    "curione-thesaurus-1561_platevol02.JPG",
    "curione-thesaurus-1561_platevol03.JPG",
    "curione-thesaurus-1561_spine-origvol01.JPG",
    "curione-thesaurus-1561_spine-origvol02.JPG",
    "curione-thesaurus-1561_spine-origvol03.JPG",
    "curione-thesaurus-1561_titlevol01.JPG",
    "curione-thesaurus-1561_titlevol02.JPG",
    "curione-thesaurus-1561_titlevol03.JPG"
  ],
  "curtius-historiarum-1670": [
    "curtius-historiarum-1670_plate.JPG",
    "curtius-historiarum-1670_spine-orig.JPG",
    "curtius-historiarum-1670_title.JPG"
  ],
  "davila-historia-1634": [
    "davila-historia-1634_plate.JPG",
    "davila-historia-1634_spine-orig.JPG",
    "davila-historia-1634_title.JPG"
  ],
  "davila-historie-1647": [
    "davila-historie-1647_plate.JPG",
    "davila-historie-1647_spine-orig.JPG",
    "davila-historie-1647_title.JPG"
  ],
  "demosthenes-orationes-1755": [
    "demosthenes-orationes-1755_plate.JPG",
    "demosthenes-orationes-1755_spine-orig.JPG",
    "demosthenes-orationes-1755_title01.JPG",
    "demosthenes-orationes-1755_title02.JPG"
  ],
  "doddridge-family-1761": [
    "doddridge-family-1761_platevol01.JPG",
    "doddridge-family-1761_platevol02.JPG",
    "doddridge-family-1761_platevol03.JPG",
    "doddridge-family-1761_platevol04.JPG",
    "doddridge-family-1761_platevol05.JPG",
    "doddridge-family-1761_platevol06.JPG",
    "doddridge-family-1761_spine-origvol01.JPG",
    "doddridge-family-1761_spine-origvol02.JPG",
    "doddridge-family-1761_spine-origvol03.JPG",
    "doddridge-family-1761_spine-origvol04.JPG",
    "doddridge-family-1761_spine-origvol05.JPG",
    "doddridge-family-1761_spine-origvol06.JPG",
    "doddridge-family-1761_titlevol01.JPG",
    "doddridge-family-1761_titlevol02.JPG",
    "doddridge-family-1761_titlevol03.JPG",
    "doddridge-family-1761_titlevol04.JPG",
    "doddridge-family-1761_titlevol05.JPG",
    "doddridge-family-1761_titlevol06.JPG"
  ],
  "dryden-fables-1700": [
    "dryden-fables-1700_plate.JPG",
    "dryden-fables-1700_spine-orig.JPG",
    "dryden-fables-1700_title01.JPG",
    "dryden-fables-1700_title02.JPG"
  ],
  "duport-greek-1665": [
    "duport-greek-1665_plate.JPG",
    "duport-greek-1665_spine-orig.JPG",
    "duport-greek-1665_title01.JPG",
    "duport-greek-1665_title02.JPG"
  ],
  "echard-general-1702": [
    "echard-general-1702_cover.JPG",
    "echard-general-1702_plate.JPG",
    "echard-general-1702_spine-orig.JPG",
    "echard-general-1702_title.JPG"
  ],
  "echard-history-1725": [
    "echard-history-1725_plate.JPG",
    "echard-history-1725_spine-orig.JPG",
    "echard-history-1725_title.JPG"
  ],
  "ecton-thesaurus-1742": [
    "ecton-thesaurus-1742_plate.JPG",
    "ecton-thesaurus-1742_spine-orig01.JPG",
    "ecton-thesaurus-1742_spine-orig02.JPG",
    "ecton-thesaurus-1742_title.JPG"
  ],
  "edmonds-commentaries-1677": [
    "edmonds-commentaries-1677_plate.JPG",
    "edmonds-commentaries-1677_spine-orig.JPG",
    "edmonds-commentaries-1677_title.JPG"
  ],
  "edwards-canons-1758": [
    "edwards-canons-1758_plate.JPG",
    "edwards-canons-1758_spine-orig.JPG",
    "edwards-canons-1758_title.JPG"
  ],
  "epictetus-all-1758": [
    "epictetus-all-1758_plate01.JPG",
    "epictetus-all-1758_plate02.JPG",
    "epictetus-all-1758_spine-orig01.JPG",
    "epictetus-all-1758_spine-orig02.JPG",
    "epictetus-all-1758_spine-origcopies01and02.JPG",
    "epictetus-all-1758_title01.JPG",
    "epictetus-all-1758_title02.JPG"
  ],
  "epictetus-encheiridion-1758": [
    "epictetus-encheiridion-1758_margin01.JPG",
    "epictetus-encheiridion-1758_margin02.JPG",
    "epictetus-encheiridion-1758_margin04.JPG",
    "epictetus-encheiridion-1758_spine-orig.jpg",
    "epictetus-encheiridion-1758_title.JPG"
  ],
  "epictetus-manuale-1744": [
    "epictetus-manuale-1744_extra.JPG",
    "epictetus-manuale-1744_spine-orig.JPG",
    "epictetus-manuale-1744_title.JPG"
  ],
  "fenelon-adventures-1768": [
    "fenelon-adventures-1768_plate.JPG",
    "fenelon-adventures-1768_spine.JPG",
    "fenelon-adventures-1768_title.JPG"
  ],
  "ficoroni-vestigia-1783": [
    "ficoroni-vestigia-1783_cover.jpg",
    "ficoroni-vestigia-1783_plate.jpg",
    "ficoroni-vestigia-1783_spine-orig.PDF",
    "ficoroni-vestigia-1783_spine-orig02.jpg",
    "ficoroni-vestigia-1783_title.jpg"
  ],
  "florian-gonzalve-1791": [
    "florian-gonzalve-1791_endpapervol01.JPG",
    "florian-gonzalve-1791_endpapervol2.JPG",
    "florian-gonzalve-1791_spine-origvol01.JPG",
    "florian-gonzalve-1791_spine-origvol02.JPG",
    "florian-gonzalve-1791_titlevol01.JPG",
    "florian-gonzalve-1791_titlevol2.JPG"
  ],
  "florus-epitome-1692": [
    "florus-epitome-1692_spine-orig.JPG",
    "florus-epitome-1692_title01.JPG",
    "florus-epitome-1692_title02.JPG"
  ],
  "fordyce-sermons-1775": [
    "fordyce-sermons-1775_platevol01.JPG",
    "fordyce-sermons-1775_platevol02.JPG",
    "fordyce-sermons-1775_spine-origvol01.JPG",
    "fordyce-sermons-1775_spine-origvol02.JPG",
    "fordyce-sermons-1775_titlevol01.JPG",
    "fordyce-sermons-1775_titlevol02.JPG"
  ],
  "foster-examination-1735": [
    "foster-examination-1735_plate.JPG",
    "foster-examination-1735_spine-orig.JPG",
    "foster-examination-1735_title.JPG"
  ],
  "foster-sermons-1739": [
    "foster-sermons-1739_platevol01.JPG",
    "foster-sermons-1739_platevol02.JPG",
    "foster-sermons-1739_platevol03.JPG",
    "foster-sermons-1739_spine-origvol01.JPG",
    "foster-sermons-1739_spine-origvol02.JPG",
    "foster-sermons-1739_spine-origvol03.JPG",
    "foster-sermons-1739_titlevol01.JPG",
    "foster-sermons-1739_titlevol02.JPG",
    "foster-sermons-1739_titlevol03.JPG"
  ],
  "franklin-private-1817": [
    "franklin-private-1817_spine-orig.JPG",
    "franklin-private-1817_title01.JPG",
    "franklin-private-1817_title02.JPG"
  ],
  "gibbs-architecture-1738": [
    "gibbs-architecture-1738_cover.JPG",
    "gibbs-architecture-1738_plate.JPG",
    "gibbs-architecture-1738_spine-orig.JPG",
    "gibbs-architecture-1738_title.JPG",
    "gibbs-architecture-1738_title02.JPG"
  ],
  "gisborne-enquiry-1797": [
    "gisborne-enquiry-1797_plate.JPG",
    "gisborne-enquiry-1797_spine-orig.JPG",
    "gisborne-enquiry-1797_title.JPG"
  ],
  "goldsmith-grecian-1805": [
    "goldsmith-grecian-1805_platevol01.JPG",
    "goldsmith-grecian-1805_platevol02.JPG",
    "goldsmith-grecian-1805_spine-origvol01.jpg",
    "goldsmith-grecian-1805_spine-origvol02.JPG",
    "goldsmith-grecian-1805_titlevol01.JPG",
    "goldsmith-grecian-1805_titlevol02.JPG"
  ],
  "goldsmith-roman-1805": [
    "goldsmith-roman-1805_platevol01.JPG",
    "goldsmith-roman-1805_platevol02.JPG",
    "goldsmith-roman-1805_spine-origvol01.JPG",
    "goldsmith-roman-1805_spine-origvol02.JPG",
    "goldsmith-roman-1805_title01vol01.JPG",
    "goldsmith-roman-1805_title02vol01.JPG",
    "goldsmith-roman-1805_titlevol02.JPG"
  ],
  "gordon-annals-1740": [
    "gordon-annals-1740_platevol01.JPG",
    "gordon-annals-1740_platevol02.JPG",
    "gordon-annals-1740_platevol03.JPG",
    "gordon-annals-1740_spine-origvol01.JPG",
    "gordon-annals-1740_spine-origvol02.JPG",
    "gordon-annals-1740_spine-origvol03.JPG",
    "gordon-annals-1740_titlevol01.JPG",
    "gordon-annals-1740_titlevol02.JPG",
    "gordon-annals-1740_titlevol03.JPG"
  ],
  "grafigny-letters-1771": [
    "grafigny-letters-1771_platevol01.JPG",
    "grafigny-letters-1771_platevol02.JPG",
    "grafigny-letters-1771_spine-origvols01to02.JPG",
    "grafigny-letters-1771_titlevol01.JPG",
    "grafigny-letters-1771_titlevol02.JPG"
  ],
  "grey-debates-1763": [
    "grey-debates-1763_platevol01.JPG",
    "grey-debates-1763_platevol02.JPG",
    "grey-debates-1763_platevol03.JPG",
    "grey-debates-1763_platevol04.JPG",
    "grey-debates-1763_platevol05.JPG",
    "grey-debates-1763_platevol06.JPG",
    "grey-debates-1763_platevol07.JPG",
    "grey-debates-1763_platevol08.JPG",
    "grey-debates-1763_platevol09.JPG",
    "grey-debates-1763_platevol10.JPG",
    "grey-debates-1763_spine-origvol01.JPG",
    "grey-debates-1763_spine-origvol02.jpg",
    "grey-debates-1763_spine-origvol03.JPG",
    "grey-debates-1763_spine-origvol04.JPG",
    "grey-debates-1763_spine-origvol05.JPG",
    "grey-debates-1763_spine-origvol06.JPG",
    "grey-debates-1763_spine-origvol07.JPG",
    "grey-debates-1763_spine-origvol08.JPG",
    "grey-debates-1763_spine-origvol09.JPG",
    "grey-debates-1763_spine-origvol10.JPG",
    "grey-debates-1763_titlevol01.JPG",
    "grey-debates-1763_titlevol02.JPG",
    "grey-debates-1763_titlevol03.JPG",
    "grey-debates-1763_titlevol04.JPG",
    "grey-debates-1763_titlevol05.JPG",
    "grey-debates-1763_titlevol06.JPG",
    "grey-debates-1763_titlevol07.JPG",
    "grey-debates-1763_titlevol08.JPG",
    "grey-debates-1763_titlevol09.JPG",
    "grey-debates-1763_titlevol10.JPG"
  ],
  "grose-antiquities-1773": [
    "grose-antiquities-1773_platevol01.JPG",
    "grose-antiquities-1773_platevol02.JPG",
    "grose-antiquities-1773_platevol03.JPG",
    "grose-antiquities-1773_platevol04.JPG",
    "grose-antiquities-1773_spine-origvol01.JPG",
    "grose-antiquities-1773_spine-origvol02.JPG",
    "grose-antiquities-1773_spine-origvol03.JPG",
    "grose-antiquities-1773_spine-origvol04.JPG",
    "grose-antiquities-1773_titlevol01.JPG",
    "grose-antiquities-1773_titlevol02.JPG",
    "grose-antiquities-1773_titlevol03.JPG",
    "grose-antiquities-1773_titlevol04.JPG"
  ],
  "grotius-veritate-1662": [
    "grotius-veritate-1662_plate.JPG",
    "grotius-veritate-1662_spine-orig.JPG",
    "grotius-veritate-1662_title.JPG"
  ],
  "hales-statica-1756": [
    "hales-statica-1756_plate.JPG",
    "hales-statica-1756_spine-orig.JPG",
    "hales-statica-1756_title.JPG"
  ],
  "hall-travels-1830": [
    "hall-travels-1830_extra.JPG",
    "hall-travels-1830_spine-orig.JPG",
    "hall-travels-1830_title01.JPG",
    "hall-travels-1830_title02.JPG"
  ],
  "hamond-historical-1749": [
    "hamond-historical-1749_plate.JPG",
    "hamond-historical-1749_spine-org.JPG",
    "hamond-historical-1749_title.JPG"
  ],
  "harris-english-1775": [
    "harris-english-1775_title.jpg"
  ],
  "hays-female-1803": [
    "hays-female-1803_covervol01.jpg",
    "hays-female-1803_extravol01.JPG",
    "hays-female-1803_platevol01.jpg",
    "hays-female-1803_platevol02.JPG",
    "hays-female-1803_platevol03.JPG",
    "hays-female-1803_platevol05.JPG",
    "hays-female-1803_platevol06.JPG",
    "hays-female-1803_platevol4.JPG",
    "hays-female-1803_spine-origvol01.JPG",
    "hays-female-1803_spine-origvol02.JPG",
    "hays-female-1803_spine-origvol03.JPG",
    "hays-female-1803_spine-origvol04.JPG",
    "hays-female-1803_spine-origvol05.JPG",
    "hays-female-1803_spine-origvol06.JPG",
    "hays-female-1803_title05vol05.JPG",
    "hays-female-1803_title06vol06.JPG",
    "hays-female-1803_titlevol01.jpg",
    "hays-female-1803_titlevol02.JPG",
    "hays-female-1803_titlevol03.JPG",
    "hays-female-1803_titlevol04.JPG"
  ],
  "hederich-lexicon-1749": [
    "hederich-lexicon-1749_plate.JPG",
    "hederich-lexicon-1749_spine-orig.JPG",
    "hederich-lexicon-1749_title.JPG"
  ],
  "heinsius-crepundia-1646": [
    "heinsius-crepundia-1646_plate.JPG",
    "heinsius-crepundia-1646_spine-orig.JPG",
    "heinsius-crepundia-1646_title.JPG"
  ],
  "hele-select-1747": [
    "hele-select-1747_plate.JPG",
    "hele-select-1747_spine-orig.JPG",
    "hele-select-1747_title.JPG"
  ],
  "herodotus-histoires-1658": [
    "herodotus-histoires-1658_plate.JPG",
    "herodotus-histoires-1658_spine-orig.JPG",
    "herodotus-histoires-1658_title.JPG"
  ],
  "heylyn-theological-1749": [
    "heylyn-theological-1749_plate.JPG",
    "heylyn-theological-1749_spine-orig.JPG",
    "heylyn-theological-1749_title.JPG"
  ],
  "hickes-linguarum-1705": [
    "hickes-linguarum-1705_extra01.JPG",
    "hickes-linguarum-1705_extra02.JPG",
    "hickes-linguarum-1705_extra03.JPG",
    "hickes-linguarum-1705_plate.JPG",
    "hickes-linguarum-1705_spine-orig.JPG",
    "hickes-linguarum-1705_title.JPG"
  ],
  "higgons-historical-1725": [
    "higgons-historical-1725_plate.JPG",
    "higgons-historical-1725_spine-orig.JPG",
    "higgons-historical-1725_title.JPG"
  ],
  "hoadly-plain-1735": [
    "hoadly-plain-1735_plate.JPG",
    "hoadly-plain-1735_spine-orig.JPG",
    "hoadly-plain-1735_title.JPG"
  ],
  "hodges-travels-1793": [
    "hodges-travels-1793_cover01.jpg",
    "hodges-travels-1793_cover02.jpg",
    "hodges-travels-1793_plate.jpg",
    "hodges-travels-1793_spine-orig.jpg",
    "hodges-travels-1793_title.jpg"
  ],
  "holberg-introduction-1755": [
    "holberg-introduction-1755_extra.JPG",
    "holberg-introduction-1755_plate.JPG",
    "holberg-introduction-1755_spine-orig.JPG",
    "holberg-introduction-1755_title.JPG"
  ],
  "hole-ornaments-1761": [
    "hole-ornaments-1761_cover.png",
    "hole-ornaments-1761_plate.jpg",
    "hole-ornaments-1761_spine-orig.jpg",
    "hole-ornaments-1761_title01.jpg",
    "hole-ornaments-1761_title02.jpg"
  ],
  "homer-iliad-1743": [
    "homer-iliad-1743_extra.JPG",
    "homer-iliad-1743_margin.JPG",
    "homer-iliad-1743_spine-orig.JPG",
    "homer-iliad-1743_title.JPG"
  ],
  "hooke-roman-1738": [
    "hooke-roman-1738_extra.JPG",
    "hooke-roman-1738_extra2.JPG",
    "hooke-roman-1738_platevol01.JPG",
    "hooke-roman-1738_platevol02.JPG",
    "hooke-roman-1738_platevol03.JPG",
    "hooke-roman-1738_spine-origvol01.JPG",
    "hooke-roman-1738_spine-origvol02.JPG",
    "hooke-roman-1738_spine-origvol03.JPG",
    "hooke-roman-1738_spine-origvols01to03.JPG",
    "hooke-roman-1738_titlevol01.JPG",
    "hooke-roman-1738_titlevol02.JPG",
    "hooke-roman-1738_titlevol03.JPG"
  ],
  "hooker-works-1682": [
    "hooker-works-1682_margin01.JPG",
    "hooker-works-1682_margin02.JPG",
    "hooker-works-1682_margin03.JPG",
    "hooker-works-1682_margin04.JPG",
    "hooker-works-1682_margin05.JPG",
    "hooker-works-1682_margin06.JPG",
    "hooker-works-1682_margin07.JPG",
    "hooker-works-1682_margin08.JPG",
    "hooker-works-1682_margin09.JPG",
    "hooker-works-1682_margin10.JPG",
    "hooker-works-1682_margin11.JPG",
    "hooker-works-1682_margin12.JPG",
    "hooker-works-1682_plate.JPG",
    "hooker-works-1682_spine-orig.JPG",
    "hooker-works-1682_title.JPG"
  ],
  "horace-flaccus-1670": [
    "horace-flaccus-1670_spine-orig.JPG",
    "horace-flaccus-1670_title.JPG"
  ],
  "horace-poetical-1750": [
    "Darren Bevin - IMG_1621.JPG",
    "horace-poetical-1750_extravol01.JPG",
    "horace-poetical-1750_platevol01.JPG",
    "horace-poetical-1750_platevol02.JPG",
    "horace-poetical-1750_platevol03.JPG",
    "horace-poetical-1750_platevol04.JPG",
    "horace-poetical-1750_spine-origvol01.JPG",
    "horace-poetical-1750_spine-origvol02.JPG",
    "horace-poetical-1750_spine-origvol03.JPG",
    "horace-poetical-1750_spine-origvol04.JPG",
    "horace-poetical-1750_title01vol01.JPG",
    "horace-poetical-1750_title01vol02.JPG",
    "horace-poetical-1750_title01vol03.JPG",
    "horace-poetical-1750_title01vol04.JPG",
    "horace-poetical-1750_title02vol01.JPG",
    "horace-poetical-1750_title02vol02.JPG",
    "horace-poetical-1750_title02vol03.JPG",
    "horace-poetical-1750_title03vol01.JPG"
  ],
  "horne-commentary-1784": [
    "horne-commentary-1784_extra.JPG",
    "horne-commentary-1784_plate.JPG",
    "horne-commentary-1784_spine-orig01.JPG",
    "horne-commentary-1784_spine-orig02.JPG",
    "horne-commentary-1784_title.JPG"
  ],
  "horne-discourses-1787": [
    "Darren Bevin - IMG_1635.JPG",
    "horne-discourses-1787_platevol01.JPG",
    "horne-discourses-1787_platevol02.JPG",
    "horne-discourses-1787_platevol03.JPG",
    "horne-discourses-1787_platevol04.JPG",
    "horne-discourses-1787_spine-origvol01.JPG",
    "horne-discourses-1787_spine-origvol02.jpg",
    "horne-discourses-1787_spine-origvol03.jpg",
    "horne-discourses-1787_spine-origvol04.JPG",
    "horne-discourses-1787_title01vol01.JPG",
    "horne-discourses-1787_title01vol02.JPG",
    "horne-discourses-1787_title01vol03.JPG",
    "horne-discourses-1787_title01vol04.JPG",
    "horne-discourses-1787_title02vol01.JPG",
    "horne-discourses-1787_title02vol02.JPG",
    "horne-discourses-1787_title02vol03.JPG",
    "horne-discourses-1787_title02vol04.JPG"
  ],
  "house-history-1743": [
    "house-history-1743_extravol2.JPG",
    "house-history-1743_platevol01.JPG",
    "house-history-1743_platevol1.JPG",
    "house-history-1743_spine-origvols01to02.JPG",
    "house-history-1743_title01vol1.JPG",
    "house-history-1743_title01vol2.JPG",
    "house-history-1743_title02vol1.JPG",
    "house-history-1743_title02vol2.JPG"
  ],
  "house-votes-1753": [
    "house-votes-1753_extra01.JPG",
    "house-votes-1753_extra02.JPG",
    "house-votes-1753_extra03.JPG",
    "house-votes-1753_extra04.JPG",
    "house-votes-1753_extra05.JPG",
    "house-votes-1753_plate.JPG",
    "house-votes-1753_spine-orig.jpg",
    "house-votes-1753_title.JPG"
  ],
  "howell-medulla-1750": [
    "howell-medulla-1750_extra01.JPG",
    "howell-medulla-1750_extra02.JPG",
    "howell-medulla-1750_plate.JPG",
    "howell-medulla-1750_spine-orig.jpg",
    "howell-medulla-1750_title.JPG"
  ],
  "hunter-sacred-1792_titlevol0": [
    "Darren Bevin - IMG_1696.JPG",
    "hunter-sacred-1792_platevol01.JPG",
    "hunter-sacred-1792_platevol02.JPG",
    "hunter-sacred-1792_platevol03.JPG",
    "hunter-sacred-1792_platevol04.JPG",
    "hunter-sacred-1792_platevol05.JPG",
    "hunter-sacred-1792_platevol06.JPG",
    "hunter-sacred-1792_spine-origvol01.JPG",
    "hunter-sacred-1792_spine-origvol02.JPG",
    "hunter-sacred-1792_spine-origvol03.JPG",
    "hunter-sacred-1792_spine-origvol04.JPG",
    "hunter-sacred-1792_spine-origvol05.JPG",
    "hunter-sacred-1792_spine-origvol06.JPG",
    "hunter-sacred-1792_titlevol01.JPG",
    "hunter-sacred-1792_titlevol02.JPG",
    "hunter-sacred-1792_titlevol03.JPG",
    "hunter-sacred-1792_titlevol04.JPG",
    "hunter-sacred-1792_titlevol05.JPG",
    "hunter-sacred-1792_titlevol06.JPG"
  ],
  "jacob-new-1756": [
    "jacob-new-1756_plate.JPG",
    "jacob-new-1756_spine-orig.JPG",
    "jacob-new-1756_title.JPG"
  ],
  "jago-edgehill-1767": [
    "jago-edgehill-1767_cover.tif",
    "jago-edgehill-1767_plate.tif",
    "jago-edgehill-1767_spine-orig.tif",
    "jago-edgehill-1767_title.tif"
  ],
  "johnson-idler-1761": [
    "johnson-idler-1761_platevol01.JPG",
    "johnson-idler-1761_platevol02.JPG",
    "johnson-idler-1761_spine-origvol01.JPG",
    "johnson-idler-1761_spine-origvol02.jpg",
    "johnson-idler-1761_titlevol01.JPG",
    "johnson-idler-1761_titlevol02.JPG"
  ],
  "johnson-journey-1775": [
    "johnson-journey-1775_cover.JPG",
    "johnson-journey-1775_plate01.JPG",
    "johnson-journey-1775_plate02.JPG",
    "johnson-journey-1775_spine-orig.JPG",
    "johnson-journey-1775_title.JPG"
  ],
  "johnston-notitia-1724": [
    "Darren Bevin - IMG_1730.JPG",
    "johnston-notitia-1724_extravol01.JPG",
    "johnston-notitia-1724_extravol02.JPG",
    "johnston-notitia-1724_platevol01.JPG",
    "johnston-notitia-1724_platevol02.JPG",
    "johnston-notitia-1724_spine-origvol01.JPG",
    "johnston-notitia-1724_spine-origvol02.JPG",
    "johnston-notitia-1724_title01vol01.JPG",
    "johnston-notitia-1724_title01vol02.JPG",
    "johnston-notitia-1724_title02vol01.JPG"
  ],
  "jortin-remarks-1751": [
    "jortin-remarks-1751_extra.JPG",
    "jortin-remarks-1751_plate.JPG",
    "jortin-remarks-1751_spine-orig.JPG",
    "jortin-remarks-1751_title.JPG"
  ],
  "josephus-famous-1640": [
    "josephus-famous-1640_extra.JPG",
    "josephus-famous-1640_margin.JPG",
    "josephus-famous-1640_plate.JPG",
    "josephus-famous-1640_spine-orig.JPG",
    "josephus-famous-1640_title.JPG"
  ],
  "juvenal-satirae-1784": [
    "juvenal-satirae-1784_extra01.JPG",
    "juvenal-satirae-1784_extra02.JPG",
    "juvenal-satirae-1784_extra03.JPG",
    "juvenal-satirae-1784_extra04.JPG",
    "juvenal-satirae-1784_margin.JPG",
    "juvenal-satirae-1784_spine-orig.JPG"
  ],
  "juvenal-satires-1693": [
    "juvenal-satires-1693_extra01.JPG",
    "juvenal-satires-1693_extra02.JPG",
    "juvenal-satires-1693_extra03.JPG",
    "juvenal-satires-1693_plate.JPG",
    "juvenal-satires-1693_spine-orig.JPG",
    "juvenal-satires-1693_title01.JPG",
    "juvenal-satires-1693_title02.JPG"
  ],
  "juvenal-satyrae-1684": [
    "juvenal-satyrae-1684_plate.JPG",
    "juvenal-satyrae-1684_spine-orig.JPG",
    "juvenal-satyrae-1684_title01.JPG",
    "juvenal-satyrae-1684_title02.JPG"
  ],
  "lander-journal-1832": [
    "lander-journal-1832_cover.JPG",
    "lander-journal-1832_spine-orig.JPG",
    "lander-journal-1832_title01.JPG",
    "lander-journal-1832_title02.JPG"
  ],
  "layer-whole-1722": [
    "layer-whole-1722_extra01.jpg",
    "layer-whole-1722_extra02.jpg",
    "layer-whole-1722_plate.jpg",
    "layer-whole-1722_spine-orig.jpg",
    "layer-whole-1722_title01.jpg",
    "layer-whole-1722_title02.jpg",
    "layer-whole-1722_title03.jpg"
  ],
  "leland-view-1754": [
    "leland-view-1754_spine-orig.JPG",
    "leland-view-1754_title.JPG"
  ],
  "lesage-adventures-1749": [
    "lesage-adventures-1749_spine-orig.JPG",
    "lesage-adventures-1749_title.JPG"
  ],
  "lesseps-travels-1790": [
    "lesseps-travels-1790_cover.JPG",
    "lesseps-travels-1790_plate.JPG",
    "lesseps-travels-1790_spine-orig.JPG",
    "lesseps-travels-1790_titlevol01.JPG",
    "lesseps-travels-1790_titlevol02.JPG"
  ],
  "lisle-observations-1757": [
    "lisle-observations-1757_title.jpg"
  ],
  "livy-historiarum-1800": [
    "livy-historiarum-1800_spine-origvol03.jpg",
    "livy-historiarum-1800_spine-origvol04.JPG",
    "livy-historiarum-1800_spine-origvol05.JPG",
    "livy-historiarum-1800_spine-origvol06.jpg",
    "livy-historiarum-1800_spine-origvols04to05.JPG",
    "livy-historiarum-1800_title01vol03.JPG",
    "livy-historiarum-1800_title01vol04.JPG",
    "livy-historiarum-1800_title01vol06.JPG",
    "livy-historiarum-1800_title02vol03.JPG",
    "livy-historiarum-1800_title02vol04.JPG",
    "livy-historiarum-1800_title02vol06.JPG",
    "livy-historiarum-1800_titlevol05.JPG"
  ],
  "lloyd-sermons-1765": [
    "lloyd-sermons-1765_plate.JPG",
    "lloyd-sermons-1765_spine-orig.JPG",
    "lloyd-sermons-1765_title01.JPG",
    "lloyd-sermons-1765_title02.JPG"
  ],
  "lockhart-memoirs-1714": [
    "lockhart-memoirs-1714_spine-orig.JPG",
    "lockhart-memoirs-1714_title.JPG"
  ],
  "long-voyages-1791": [
    "long-voyages-1791_cover.jpg",
    "long-voyages-1791_extra01.jpg",
    "long-voyages-1791_extra02.jpg",
    "long-voyages-1791_extra03.jpg",
    "long-voyages-1791_extra04.jpg",
    "long-voyages-1791_plate.jpg",
    "long-voyages-1791_spine-orig.jpg",
    "long-voyages-1791_title.jpg"
  ],
  "lucan-bello-1669": [
    "lucan-bello-1669_extra01.JPG",
    "lucan-bello-1669_plate.JPG",
    "lucan-bello-1669_spine-orig.jpg",
    "lucan-bello-1669_title.JPG"
  ],
  "ludlow-memoirs-1698": [
    "ludlow-memoirs-1698_plate.JPG",
    "ludlow-memoirs-1698_spine-orig.JPG",
    "ludlow-memoirs-1698_title.JPG"
  ],
  "lyttelton-history-1767": [
    "lyttelton-history-1767_platevol01.JPG",
    "lyttelton-history-1767_platevol02.JPG",
    "lyttelton-history-1767_platevol03.JPG",
    "lyttelton-history-1767_platevol04.JPG",
    "lyttelton-history-1767_spine-orig.JPG",
    "lyttelton-history-1767_title01vol01.JPG",
    "lyttelton-history-1767_title01vol03.JPG",
    "lyttelton-history-1767_title01vol04.JPG",
    "lyttelton-history-1767_title01vol2.JPG",
    "lyttelton-history-1767_title02vol01.JPG",
    "lyttelton-history-1767_title02vol02.JPG",
    "lyttelton-history-1767_title02vol04.JPG"
  ],
  "lyttelton-letters-1735": [
    "lyttelton-letters-1735_cover.JPG",
    "lyttelton-letters-1735_extra01.JPG",
    "lyttelton-letters-1735_extra02.JPG",
    "lyttelton-letters-1735_plate.JPG",
    "lyttelton-letters-1735_spine-orig.jpg",
    "lyttelton-letters-1735_title.JPG"
  ],
  "mably-principles-1758": [
    "mably-principles-1758_extra01.JPG",
    "mably-principles-1758_extra02.JPG",
    "mably-principles-1758_extra03.JPG",
    "mably-principles-1758_plate.JPG",
    "mably-principles-1758_spine-orig01.JPG",
    "mably-principles-1758_spine-orig02.JPG",
    "mably-principles-1758_title.JPG"
  ],
  "mansell-exact-1680": [
    "mansell-exact-1680_plate.JPG",
    "mansell-exact-1680_spine-orig.JPG",
    "mansell-exact-1680_title.JPG"
  ],
  "marmontel-contes-1761": [
    "marmontel-contes-1761_platevol01.JPG",
    "marmontel-contes-1761_platevol02.JPG",
    "marmontel-contes-1761_platevol03.JPG",
    "marmontel-contes-1761_spine-orig.JPG",
    "marmontel-contes-1761_title01vol03.JPG",
    "marmontel-contes-1761_title02vol3.JPG",
    "marmontel-contes-1761_titlevol01.JPG",
    "marmontel-contes-1761_titlevol02.JPG"
  ],
  "martial-epigrammata-1661": [
    "martial-epigrammata-1661_endpaper.JPG",
    "martial-epigrammata-1661_spine-orig.JPG",
    "martial-epigrammata-1661_title.JPG"
  ],
  "mason-english-1778": [
    "mason-english-1778_plate.JPG",
    "mason-english-1778_spine-orig01.JPG",
    "mason-english-1778_spine-orig02.JPG",
    "mason-english-1778_title.JPG"
  ],
  "maucomble-histoire-1767": [
    "maucomble-histoire-1767_extra01.JPG",
    "maucomble-histoire-1767_extra02.JPG",
    "maucomble-histoire-1767_extra03.JPG",
    "maucomble-histoire-1767_extra04.JPG",
    "maucomble-histoire-1767_extra05.JPG",
    "maucomble-histoire-1767_plate.JPG",
    "maucomble-histoire-1767_spine-orig.JPG",
    "maucomble-histoire-1767_title.JPG"
  ],
  "melmoth-letters-1748": [
    "melmoth-letters-1748_plate.JPG",
    "melmoth-letters-1748_spine-orig.jpg",
    "melmoth-letters-1748_title01.JPG",
    "melmoth-letters-1748_title02.JPG"
  ],
  "melvil-memoirs-1735": [
    "melvil-memoirs-1735_plate.JPG",
    "melvil-memoirs-1735_spine-orig.JPG",
    "melvil-memoirs-1735_title.JPG"
  ],
  "menage-poemata-1663": [
    "menage-poemata-1663_plate.JPG",
    "menage-poemata-1663_spine-org.JPG",
    "menage-poemata-1663_title.JPG"
  ],
  "middleton-examination-1750": [
    "middleton-examination-1750_plate.JPG",
    "middleton-examination-1750_spine-orig.JPG",
    "middleton-examination-1750_title.JPG"
  ],
  "middleton-free-1749": [
    "middleton-free-1749_plate.JPG",
    "middleton-free-1749_spine-orig.JPG",
    "middleton-free-1749_title01.JPG",
    "middleton-free-1749_title02.JPG"
  ],
  "milman-history-1830": [
    "milman-history-1830_extra.JPG",
    "milman-history-1830_spine-orig.JPG",
    "milman-history-1830_title.JPG"
  ],
  "milton-paradise-1736": [
    "milton-paradise-1736_cover.jpg",
    "milton-paradise-1736_extra.jpg",
    "milton-paradise-1736_plate.jpg",
    "milton-paradise-1736_spine-orig.jpg",
    "milton-paradise-1736_title01.jpg",
    "milton-paradise-1736_title02.jpg"
  ],
  "milton-paradisus-1750": [
    "milton-paradisus-1750_extra01.JPG",
    "milton-paradisus-1750_extra02.JPG",
    "milton-paradisus-1750_plate.JPG",
    "milton-paradisus-1750_spine-orig01.JPG",
    "milton-paradisus-1750_spine-orig02.JPG",
    "milton-paradisus-1750_title.JPG"
  ],
  "molesworth-account-1694": [
    "molesworth-account-1694_plate01.jpg",
    "molesworth-account-1694_plate01_title.jpg",
    "molesworth-account-1694_plate02.jpg",
    "molesworth-account-1694_spine-orig.JPG"
  ],
  "moyle-works-1726": [
    "moyle-works-1726_platevol01.JPG",
    "moyle-works-1726_platevol02.JPG",
    "moyle-works-1726_spine-origvol01.JPG",
    "moyle-works-1726_spine-origvol02.JPG",
    "moyle-works-1726_titlevol01.JPG",
    "moyle-works-1726_titlevol02.JPG"
  ],
  "nalson-true-1684": [
    "nalson-true-1684_extra.JPG",
    "nalson-true-1684_plate.JPG",
    "nalson-true-1684_spine-orig.JPG",
    "nalson-true-1684_title.JPG"
  ],
  "newman-concordance-1672": [
    "newman-concordance-1672_endpapers.JPG",
    "newman-concordance-1672_margin.JPG",
    "newman-concordance-1672_plate.JPG",
    "newman-concordance-1672_spine-orig.JPG",
    "newman-concordance-1672_title.JPG"
  ],
  "nicholls-comment-1710": [
    "nicholls-comment-1710_extra.JPG",
    "nicholls-comment-1710_plate.JPG",
    "nicholls-comment-1710_spine-orig.JPG",
    "nicholls-comment-1710_title01.JPG",
    "nicholls-comment-1710_title02.JPG"
  ],
  "ogden-sermons-1786": [
    "ogden-sermons-1786_spine-origvols01to02.JPG",
    "ogden-sermons-1786_title01vol01.JPG",
    "ogden-sermons-1786_title02vol01.JPG",
    "ogden-sermons-1786_titlevol02.JPG"
  ],
  "ovid-epistolarum-1743": [
    "ovid-epistolarum-1743_plate.JPG",
    "ovid-epistolarum-1743_spine-orig.JPG",
    "ovid-epistolarum-1743_title.JPG"
  ],
  "ovid-opera-1683": [
    "ovid-opera-1683_extra01vol2.JPG",
    "ovid-opera-1683_extra02vol02.JPG",
    "ovid-opera-1683_extravol01.JPG",
    "ovid-opera-1683_platevol1.JPG",
    "ovid-opera-1683_spine-orig.JPG",
    "ovid-opera-1683_title01vol01.JPG",
    "ovid-opera-1683_title02vol01.JPG",
    "ovid-opera-1683_titlevol02.JPG",
    "ovid-opera-1683_titlevol03.JPG"
  ],
  "paley-horae-1790": [
    "paley-horae-1790_plate.JPG",
    "paley-horae-1790_spine-orig.JPG",
    "paley-horae-1790_title.JPG"
  ],
  "paley-view-1794": [
    "paley-view-1794_platevol01.JPG",
    "paley-view-1794_platevol02.JPG",
    "paley-view-1794_spine-origvol01.jpg",
    "paley-view-1794_spine-origvol02.JPG",
    "paley-view-1794_title01vol01.JPG",
    "paley-view-1794_title01vol02.JPG",
    "paley-view-1794_title02vol01.JPG",
    "paley-view-1794_title02vol02.JPG"
  ],
  "peltier-dernier-1793": [
    "peltier-dernier-1793_spine-origvol02.jpg",
    "peltier-dernier-1793_title.JPG"
  ],
  "philidor-analyse-1777": [
    "philidor-analyse-1777_plate.JPG",
    "philidor-analyse-1777_spine-orig.JPG",
    "philidor-analyse-1777_title.JPG"
  ],
  "picart-ceremonies-1733": [
    "picart-ceremonies-1733_platevol01.JPG",
    "picart-ceremonies-1733_platevol03.JPG",
    "picart-ceremonies-1733_spine-origvol01.JPG",
    "picart-ceremonies-1733_spine-origvol03.JPG",
    "picart-ceremonies-1733_spine-origvol04.JPG",
    "picart-ceremonies-1733_spine-origvol06.JPG",
    "picart-ceremonies-1733_titlevol01.JPG",
    "picart-ceremonies-1733_titlevol03.JPG"
  ],
  "pine-tapestry-1739": [
    "pine-tapestry-1739_plate01.JPG",
    "pine-tapestry-1739_plate02.JPG",
    "pine-tapestry-1739_spine.JPG",
    "pine-tapestry-1739_title.JPG"
  ],
  "piozzi-observations-1789": [
    "piozzi-observations-1789_extra.JPG",
    "piozzi-observations-1789_plate.JPG",
    "piozzi-observations-1789_spine-origvols01to02.jpg",
    "piozzi-observations-1789_title.jpg"
  ],
  "pliny-letters-1752": [
    "pliny-letters-1752_platevol01.JPG",
    "pliny-letters-1752_platevol02.JPG",
    "pliny-letters-1752_spine-origvol01.JPG",
    "pliny-letters-1752_spine-origvol02.JPG",
    "pliny-letters-1752_spine-origvols01to02.JPG",
    "pliny-letters-1752_title01vol01.JPG",
    "pliny-letters-1752_title01vol02.JPG",
    "pliny-letters-1752_title02vol01.JPG",
    "pliny-letters-1752_title02vol02.JPG"
  ],
  "pluche-spectacle-1744": [
    "pluche-spectacle-1744_extra01vol01.JPG",
    "pluche-spectacle-1744_extra01vol02.JPG",
    "pluche-spectacle-1744_extra01vol03.JPG",
    "pluche-spectacle-1744_extra01vol04.JPG",
    "pluche-spectacle-1744_extra01vol05.JPG",
    "pluche-spectacle-1744_extra01vol06.JPG",
    "pluche-spectacle-1744_extra01vol07.JPG",
    "pluche-spectacle-1744_extra02vol01.JPG",
    "pluche-spectacle-1744_extra02vol02.JPG",
    "pluche-spectacle-1744_extra02vol03.JPG",
    "pluche-spectacle-1744_extra02vol05.JPG",
    "pluche-spectacle-1744_extra02vol06.JPG",
    "pluche-spectacle-1744_extra02vol07.JPG",
    "pluche-spectacle-1744_platevol01.JPG",
    "pluche-spectacle-1744_platevol02.JPG",
    "pluche-spectacle-1744_platevol03.JPG",
    "pluche-spectacle-1744_platevol04.JPG",
    "pluche-spectacle-1744_platevol05.JPG",
    "pluche-spectacle-1744_platevol06.JPG",
    "pluche-spectacle-1744_platevol07.JPG",
    "pluche-spectacle-1744_spineorigvol01.JPG",
    "pluche-spectacle-1744_spineorigvol02.JPG",
    "pluche-spectacle-1744_spineorigvol03.JPG",
    "pluche-spectacle-1744_spineorigvol04.JPG",
    "pluche-spectacle-1744_spineorigvol05.JPG",
    "pluche-spectacle-1744_spineorigvol06.JPG",
    "pluche-spectacle-1744_spineorigvol07.JPG",
    "pluche-spectacle-1744_titlevol01.JPG",
    "pluche-spectacle-1744_titlevol02.JPG",
    "pluche-spectacle-1744_titlevol03.JPG",
    "pluche-spectacle-1744_titlevol04.JPG",
    "pluche-spectacle-1744_titlevol05.JPG",
    "pluche-spectacle-1744_titlevol06.JPG",
    "pluche-spectacle-1744_titlevol07.JPG"
  ],
  "plutarch-demosthenis-1744": [
    "plutarch-demosthenis-1744_plate.JPG",
    "plutarch-demosthenis-1744_spine-orig.JPG",
    "plutarch-demosthenis-1744_title.JPG"
  ],
  "plutarch-lives-1716": [
    "plutarch-lives-1716_platevol01.JPG",
    "plutarch-lives-1716_platevol02.JPG",
    "plutarch-lives-1716_platevol03.JPG",
    "plutarch-lives-1716_platevol04.JPG",
    "plutarch-lives-1716_platevol05.JPG",
    "plutarch-lives-1716_spine-origvol01.jpg",
    "plutarch-lives-1716_spine-origvol02.jpg",
    "plutarch-lives-1716_spine-origvol03.jpg",
    "plutarch-lives-1716_spine-origvol04.jpg",
    "plutarch-lives-1716_spine-origvol05.jpg",
    "plutarch-lives-1716_spine-origvols01to05.jpg",
    "plutarch-lives-1716_title01vol01.JPG",
    "plutarch-lives-1716_title02vol01.jpg",
    "plutarch-lives-1716_title03vol01.JPG",
    "plutarch-lives-1716_titlevol02.JPG",
    "plutarch-lives-1716_titlevol03.JPG",
    "plutarch-lives-1716_titlevol04.jpg",
    "plutarch-lives-1716_titlevol05.JPG"
  ],
  "polignac-antilucretius-1748": [
    "polignac-antilucretius-1748_platevol01.JPG",
    "polignac-antilucretius-1748_platevol02.JPG",
    "polignac-antilucretius-1748_spine-origvols01to02.JPG",
    "polignac-antilucretius-1748_titlevol01.JPG",
    "polignac-antilucretius-1748_titlevol02.JPG"
  ],
  "polybius-historiarum-1609": [
    "polybius-historiarum-1609_margin01.JPG",
    "polybius-historiarum-1609_margin02.JPG",
    "polybius-historiarum-1609_plate.JPG",
    "polybius-historiarum-1609_spine-orig.JPG",
    "polybius-historiarum-1609_title.JPG"
  ],
  "porteus-sermons-1783": [
    "porteus-sermons-1783_platevol01.JPG",
    "porteus-sermons-1783_platevol02.JPG",
    "porteus-sermons-1783_spine-origvols01to02.JPG",
    "porteus-sermons-1783_titlevol01.JPG",
    "porteus-sermons-1783_titlevol02.JPG"
  ],
  "potter-archaeologia-1728": [
    "potter-archaeologia-1728-titlevol01.JPG",
    "potter-archaeologia-1728_spine-origvols01to02.JPG",
    "potter-archaeologia-1728_titlevol02.JPG"
  ],
  "pretyman-elements-1800": [
    "pretyman-elements-1800_platevol01.JPG",
    "pretyman-elements-1800_platevolo2.JPG",
    "pretyman-elements-1800_spine-origvol01.JPG",
    "pretyman-elements-1800_spine-origvol02.JPG",
    "pretyman-elements-1800_spine-origvols01to02.JPG",
    "pretyman-elements-1800_titlevol01.JPG",
    "pretyman-elements-1800_titlevol02.JPG"
  ],
  "prevost-histoire-1740": [
    "prevost-histoire-1740_platevol01.JPG",
    "prevost-histoire-1740_platevol02.JPG",
    "prevost-histoire-1740_spine-origvol01.JPG",
    "prevost-histoire-1740_spine-origvol02.JPG",
    "prevost-histoire-1740_titlevol01.JPG",
    "prevost-histoire-1740_titlevol02.JPG"
  ],
  "prevost-monde-1760": [
    "prevost-monde-1760_platevol01.JPG",
    "prevost-monde-1760_platevol02.JPG",
    "prevost-monde-1760_platevol03.JPG",
    "prevost-monde-1760_platevol04.JPG",
    "prevost-monde-1760_spine-origvol01.JPG",
    "prevost-monde-1760_spine-origvol03.JPG",
    "prevost-monde-1760_spine-origvols01to04.JPG",
    "prevost-monde-1760_titlevol01.JPG",
    "prevost-monde-1760_titlevol02.JPG",
    "prevost-monde-1760_titlevol03.JPG",
    "prevost-monde-1760_titlevol04.JPG"
  ],
  "prideaux-old-1718": [
    "prideaux-old-1718_extra01vol01.JPG",
    "prideaux-old-1718_extra02vol01.JPG",
    "prideaux-old-1718_extra03vol01.JPG",
    "prideaux-old-1718_extra04vol01.JPG",
    "prideaux-old-1718_platevol01.JPG",
    "prideaux-old-1718_platevol02.JPG",
    "prideaux-old-1718_spine-origvols01to02.JPG",
    "prideaux-old-1718_titlevol01.JPG",
    "prideaux-old-1718_titlevol02.JPG"
  ],
  "puffendorf-introduction-1702": [
    "puffendorf-introduction-1702_plate.JPG",
    "puffendorf-introduction-1702_spine-orig.JPG",
    "puffendorf-introduction-1702_title.JPG"
  ],
  "puffendorf-law-1703": [
    "puffendorf-law-1703_margin01.JPG",
    "puffendorf-law-1703_margin02.JPG",
    "puffendorf-law-1703_plate.JPG",
    "puffendorf-law-1703_spine-orig.JPG",
    "puffendorf-law-1703_title.JPG"
  ],
  "quintilian-institutionum-1665": [
    "quintilian-institutionum-1665_platevol01.JPG",
    "quintilian-institutionum-1665_platevol02.JPG",
    "quintilian-institutionum-1665_spine-origvol02.JPG",
    "quintilian-institutionum-1665_spine-origvols01to02.JPG",
    "quintilian-institutionum-1665_titlevol01.JPG",
    "quintilian-institutionum-1665_titlevol02.JPG"
  ],
  "raleigh-history-1677": [
    "raleigh-history-1677_extra.JPG",
    "raleigh-history-1677_plate.JPG",
    "raleigh-history-1677_spine-orig.JPG",
    "raleigh-history-1677_title.JPG",
    "raleigh-history-1677_title02.JPG"
  ],
  "randolph-advantages-1733": [
    "randolph-advantages-1733_extra01.JPG",
    "randolph-advantages-1733_extra02.JPG",
    "randolph-advantages-1733_extra03.JPG",
    "randolph-advantages-1733_extra04.JPG",
    "randolph-advantages-1733_extra05.JPG",
    "randolph-advantages-1733_extra06.JPG",
    "randolph-advantages-1733_extra07.JPG",
    "randolph-advantages-1733_plate.JPG",
    "randolph-advantages-1733_spine-orig01.JPG",
    "randolph-advantages-1733_spine-origvol02.JPG",
    "randolph-advantages-1733_title.JPG"
  ],
  "randolph-christian-1744": [
    "randolph-christian-1744_plate.JPG",
    "randolph-christian-1744_spine-orig.JPG",
    "randolph-christian-1744_title.JPG"
  ],
  "rapin-history-1732": [
    "rapin-history-1732_extra01vol01.JPG",
    "rapin-history-1732_extra02vol01.JPG",
    "rapin-history-1732_extra03vol01.JPG",
    "rapin-history-1732_extra04vol01.JPG",
    "rapin-history-1732_platevol01.JPG",
    "rapin-history-1732_platevol02.JPG",
    "rapin-history-1732_spine-origvol01.JPG",
    "rapin-history-1732_spine-origvol02.JPG",
    "rapin-history-1732_spine-origvols01to02.JPG",
    "rapin-history-1732_titlevol01.JPG",
    "rapin-history-1732_titlevol02.JPG"
  ],
  "roberston-america-1778": [
    "roberston-america-1778_extra01vol01.JPG",
    "roberston-america-1778_extra01vol02.JPG",
    "roberston-america-1778_extra02vol01.JPG",
    "roberston-america-1778_extra02vol02.JPG",
    "roberston-america-1778_extra03vol02.JPG",
    "roberston-america-1778_platevol01.JPG",
    "roberston-america-1778_platevol02.JPG",
    "roberston-america-1778_spine-origvol01.JPG",
    "roberston-america-1778_spine-origvol02.JPG",
    "roberston-america-1778_spine-origvols01to02.JPG",
    "roberston-america-1778_title01vol01.JPG",
    "roberston-america-1778_title01vol02.JPG",
    "roberston-america-1778_title02vol01.JPG",
    "roberston-america-1778_title02vol02.JPG"
  ],
  "roberston-historical-1791": [
    "roberston-historical-1791_endpapers.JPG",
    "roberston-historical-1791_extra01.JPG",
    "roberston-historical-1791_extra02.JPG",
    "roberston-historical-1791_spine-orig.JPG",
    "roberston-historical-1791_title.JPG"
  ],
  "robertson-reign-1769": [
    "robertson-reign-1769_platevol01.JPG",
    "robertson-reign-1769_platevol02.JPG",
    "robertson-reign-1769_platevol03.JPG",
    "robertson-reign-1769_spine-origvol01.JPG",
    "robertson-reign-1769_spine-origvol02.JPG",
    "robertson-reign-1769_spine-origvol03.JPG",
    "robertson-reign-1769_spine-origvols01to03.JPG",
    "robertson-reign-1769_title01vol02.JPG",
    "robertson-reign-1769_title01vol03.JPG",
    "robertson-reign-1769_title02vol01.JPG",
    "robertson-reign-1769_title02vol02.JPG",
    "robertson-reign-1769_title02vol03.JPG",
    "rrobertson-reign-1769_title01vol01.JPG"
  ],
  "robertson-scotland-1759": [
    "robertson-scotland-1759_platevol01.JPG",
    "robertson-scotland-1759_platevol02.JPG",
    "robertson-scotland-1759_spine-origvol01.JPG",
    "robertson-scotland-1759_spine-origvol02.JPG",
    "robertson-scotland-1759_spine-origvols01to02.JPG",
    "robertson-scotland-1759_titlevol01.JPG",
    "robertson-scotland-1759_titlevol02.JPG"
  ],
  "rousseau-lettres-1761": [
    "rousseau-lettres-1761_platevol01.JPG",
    "rousseau-lettres-1761_platevol03.JPG",
    "rousseau-lettres-1761_platevol2.JPG",
    "rousseau-lettres-1761_spine-origvol01.JPG",
    "rousseau-lettres-1761_spine-origvol02.JPG",
    "rousseau-lettres-1761_spine-origvols01to03.JPG",
    "rousseau-lettres-1761_title01vol01.JPG",
    "rousseau-lettres-1761_title01vol02.JPG",
    "rousseau-lettres-1761_title01vol03.JPG",
    "rousseau-lettres-1761_title02vol01.JPG",
    "rousseau-lettres-1761_title02vol02.JPG",
    "rousseau-lettres-1761_title02vol03.JPG"
  ],
  "rousseau-oeuvres-1759": [
    "rousseau-oeuvres-1759_platevol01.JPG",
    "rousseau-oeuvres-1759_platevol02.JPG",
    "rousseau-oeuvres-1759_spine-origvol01.JPG",
    "rousseau-oeuvres-1759_spine-origvol02.JPG",
    "rousseau-oeuvres-1759_title01vol01.JPG",
    "rousseau-oeuvres-1759_title01vol02.JPG",
    "rousseau-oeuvres-1759_title02vol01.JPG",
    "rousseau-oeuvres-1759_title02vol02.JPG"
  ],
  "rushworth-historical-1721": [
    "rushworth-historical-1721_extravol06.JPG",
    "rushworth-historical-1721_platevol01.JPG",
    "rushworth-historical-1721_platevol02.JPG",
    "rushworth-historical-1721_platevol03.JPG",
    "rushworth-historical-1721_platevol04.JPG",
    "rushworth-historical-1721_platevol05.JPG",
    "rushworth-historical-1721_platevol07.JPG",
    "rushworth-historical-1721_spine-orig02vols01to08.JPG",
    "rushworth-historical-1721_spine-origvol01.JPG",
    "rushworth-historical-1721_spine-origvol02.JPG",
    "rushworth-historical-1721_spine-origvol03.JPG",
    "rushworth-historical-1721_spine-origvol04.JPG",
    "rushworth-historical-1721_spine-origvol05.JPG",
    "rushworth-historical-1721_spine-origvol06.JPG",
    "rushworth-historical-1721_spine-origvol07.JPG",
    "rushworth-historical-1721_spine-origvol08.JPG",
    "rushworth-historical-1721_titlevol01.JPG",
    "rushworth-historical-1721_titlevol02.JPG",
    "rushworth-historical-1721_titlevol03.JPG",
    "rushworth-historical-1721_titlevol04.JPG",
    "rushworth-historical-1721_titlevol05.JPG",
    "rushworth-historical-1721_titlevol06.JPG",
    "rushworth-historical-1721_titlevol07.JPG",
    "rushworth-historical-1721_titlevol08.JPG"
  ],
  "russell-history-1810": [
    "russell-history-1810_platevol01.JPG",
    "russell-history-1810_platevol02.JPG",
    "russell-history-1810_platevol03.JPG",
    "russell-history-1810_platevol04.JPG",
    "russell-history-1810_platevol05.JPG",
    "russell-history-1810_platevol06.JPG",
    "russell-history-1810_spine-origvol01.JPG",
    "russell-history-1810_spine-origvol02.JPG",
    "russell-history-1810_spine-origvol03.JPG",
    "russell-history-1810_spine-origvol04.JPG",
    "russell-history-1810_spine-origvol05.JPG",
    "russell-history-1810_spine-origvol06.JPG",
    "russell-history-1810_spine-origvols01to06.JPG",
    "russell-history-1810_titlevol01.JPG",
    "russell-history-1810_titlevol02.JPG",
    "russell-history-1810_titlevol03.JPG",
    "russell-history-1810_titlevol04.JPG",
    "russell-history-1810_titlevol05.JPG",
    "russell-history-1810_titlevol06.JPG"
  ],
  "rycaut-present-1670": [
    "rycaut-present-1670_spine-orig.JPG",
    "rycaut-present-1670_title.JPG"
  ],
  "sacheverell-tryal-1710": [
    "sacheverell-tryal-1710_extra.JPG",
    "sacheverell-tryal-1710_plate.JPG",
    "sacheverell-tryal-1710_spine-orig.JPG",
    "sacheverell-tryal-1710_title.JPG"
  ],
  "saintreal-oeuvres-1745": [
    "saintreal-oeuvres-1745_endpapersvol01.JPG",
    "saintreal-oeuvres-1745_endpapersvol02.JPG",
    "saintreal-oeuvres-1745_extravol01.JPG",
    "saintreal-oeuvres-1745_spine-origvol01.JPG",
    "saintreal-oeuvres-1745_spine-origvol02.JPG",
    "saintreal-oeuvres-1745_spine-origvols01to02.JPG",
    "saintreal-oeuvres-1745_titlevol01.JPG",
    "saintreal-oeuvres-1745_titlevol02.JPG"
  ],
  "sallust-opera-1789": [
    "sallust-opera-1789_spine-orig.JPG",
    "sallust-opera-1789_title.JPG"
  ],
  "salmon-chronological-1733": [
    "salmon-chronological-1733_plate.JPG",
    "salmon-chronological-1733_spine-orig.JPG",
    "salmon-chronological-1733_title.JPG"
  ],
  "sarpi-rights-1722": [
    "sarpi-rights-1722_margin.JPG",
    "sarpi-rights-1722_spine-orig.JPG",
    "sarpi-rights-1722_title.JPG"
  ],
  "scapula-lexicon-1652": [
    "scapula-lexicon-1652_margin.JPG",
    "scapula-lexicon-1652_plate.JPG",
    "scapula-lexicon-1652_spine-orig.JPG",
    "scapula-lexicon-1652_title.JPG"
  ],
  "scarron-whole-1700": [
    "darren Bevin - IMG_4312.JPG",
    "scarron-whole-1700_margin.JPG",
    "scarron-whole-1700_spine-orig.JPG",
    "scarron-whole-1700_title.JPG"
  ],
  "schade-new-1816": [
    "schade-new-1816_extra.JPG",
    "schade-new-1816_plate.JPG",
    "schade-new-1816_spine-orig.JPG",
    "schade-new-1816_title.JPG"
  ],
  "scobell-collection-1658": [
    "scobell-collection-1658_extra.JPG",
    "scobell-collection-1658_plate.JPG",
    "scobell-collection-1658_spine-orig.JPG",
    "scobell-collection-1658_title.JPG"
  ],
  "scougal-life-1735": [
    "scougal-life-1735_margin01.JPG",
    "scougal-life-1735_margin02.JPG",
    "scougal-life-1735_margin03.JPG",
    "scougal-life-1735_margin04.JPG",
    "scougal-life-1735_margin05.JPG",
    "scougal-life-1735_spine-orig.JPG",
    "scougal-life-1735_title.JPG"
  ],
  "secker-lectures-1769": [
    "secker-lectures-1769_platevol01.JPG",
    "secker-lectures-1769_platevol02.JPG",
    "secker-lectures-1769_spine-origvol01.JPG",
    "secker-lectures-1769_spine-origvol2.JPG",
    "secker-lectures-1769_spine-origvols01to02.JPG",
    "secker-lectures-1769_titlevol01.JPG",
    "secker-lectures-1769_titlevol02.JPG"
  ],
  "secker-sermons-1770": [
    "secker-sermons-1770_platevol02.JPG",
    "secker-sermons-1770_platevol03.JPG",
    "secker-sermons-1770_platevol04.JPG",
    "secker-sermons-1770_spine-origvol02.JPG",
    "secker-sermons-1770_spine-origvol03.JPG",
    "secker-sermons-1770_spine-origvol04.JPG",
    "secker-sermons-1770_spine-origvols01to04.JPG",
    "secker-sermons-1770_titlevol01.JPG",
    "secker-sermons-1770_titlevol02.JPG",
    "secker-sermons-1770_titlevol03.JPG",
    "secker-sermons-1770_titlevol04.JPG"
  ],
  "selden-historical-1689": [
    "selden-historical-1689_plate.JPG",
    "selden-historical-1689_spine-orig.JPG",
    "selden-historical-1689_title.JPG"
  ],
  "selden-titles-1672": [
    "selden-titles-1672_plate.JPG",
    "selden-titles-1672_spine-orig.JPG",
    "selden-titles-1672_title.JPG"
  ],
  "seneca-opera-1671": [
    "seneca-opera-1671_platevol01.JPG",
    "seneca-opera-1671_platevol02.JPG",
    "seneca-opera-1671_platevol03.JPG",
    "seneca-opera-1671_spine-origvol01.JPG",
    "seneca-opera-1671_spine-origvol02.JPG",
    "seneca-opera-1671_spine-origvol03.JPG",
    "seneca-opera-1671_spine-origvols01to03.JPG",
    "seneca-opera-1671_title01vol01.JPG",
    "seneca-opera-1671_title02vol01.JPG",
    "seneca-opera-1671_titlevol02.JPG",
    "seneca-opera-1671_titlevol03.JPG"
  ],
  "shaftesbury-characteristicks-1749": [
    "shaftesbury-characteristicks-1749_extravol03.JPG",
    "shaftesbury-characteristicks-1749_platevol01.JPG",
    "shaftesbury-characteristicks-1749_platevol02.JPG",
    "shaftesbury-characteristicks-1749_platevol03.JPG",
    "shaftesbury-characteristicks-1749_spine-origvol02.JPG",
    "shaftesbury-characteristicks-1749_spine-origvol03.JPG",
    "shaftesbury-characteristicks-1749_spine-origvols01to03.JPG",
    "shaftesbury-characteristicks-1749_title01vol01.JPG",
    "shaftesbury-characteristicks-1749_title02vol02.JPG",
    "shaftesbury-characteristicks-1749_titlevol02.JPG",
    "shaftesbury-characteristicks-1749_titlevol03.JPG"
  ],
  "shakespeare-works-1735": [
    "shakespeare-works-1735_extra01vol02.JPG",
    "shakespeare-works-1735_extra01vol06.JPG",
    "shakespeare-works-1735_extra02vol02.JPG",
    "shakespeare-works-1735_extra02vol06.JPG",
    "shakespeare-works-1735_extra03vol06.JPG",
    "shakespeare-works-1735_extravol01.JPG",
    "shakespeare-works-1735_extravol04.JPG",
    "shakespeare-works-1735_extravol05.JPG",
    "shakespeare-works-1735_extravol08.JPG",
    "shakespeare-works-1735_margin01vol06.JPG",
    "shakespeare-works-1735_marginvol05.JPG",
    "shakespeare-works-1735_platevol01.JPG",
    "shakespeare-works-1735_platevol02.JPG",
    "shakespeare-works-1735_platevol04.JPG",
    "shakespeare-works-1735_platevol08.JPG",
    "shakespeare-works-1735_spine-origvol01.JPG",
    "shakespeare-works-1735_spine-origvol02.JPG",
    "shakespeare-works-1735_spine-origvol03.JPG",
    "shakespeare-works-1735_spine-origvol04.JPG",
    "shakespeare-works-1735_spine-origvol05.JPG",
    "shakespeare-works-1735_spine-origvol06.jpg",
    "shakespeare-works-1735_spine-origvol08.jpg",
    "shakespeare-works-1735_spine-origvols01to08.JPG",
    "shakespeare-works-1735_titlevol01.JPG",
    "shakespeare-works-1735_titlevol02.JPG",
    "shakespeare-works-1735_titlevol04.JPG",
    "shakespeare-works-1735_titlevol05.JPG",
    "shakespeare-works-1735_titlevol06.JPG",
    "shakespeare-works-1735_titlevol08.JPG"
  ],
  "leftovers- extra title pages within volumes s ": "",
  "vol": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "sharp-letters-1767": [
    "sharp-letters-1767_plate.JPG",
    "sharp-letters-1767_spine-orig.JPG",
    "sharp-letters-1767_title.JPG"
  ],
  "sherlock-use-1725": [
    "sherlock-use-1725_plate.JPG",
    "sherlock-use-1725_spine-orig.JPG",
    "sherlock-use-1725_title.JPG"
  ],
  "shrubsole-history-1772": [
    "shrubsole-history-1772_cover.jpg",
    "shrubsole-history-1772_extra01.jpg",
    "shrubsole-history-1772_extra02.jpg",
    "shrubsole-history-1772_extra03.jpg",
    "shrubsole-history-1772_plate.jpg",
    "shrubsole-history-1772_spine-orig.JPG",
    "shrubsole-history-1772_title.jpg"
  ],
  "silius-bello-1695": [
    "silius-bello-1695_extra01.JPG",
    "silius-bello-1695_extra02.JPG",
    "silius-bello-1695_extra03.JPG",
    "silius-bello-1695_extra04.JPG",
    "silius-bello-1695_plate.JPG",
    "silius-bello-1695_spine-orig.JPG",
    "silius-bello-1695_title.JPG"
  ],
  "simon-essay-1749": [
    "simon-essay-1749_extra01.JPG",
    "simon-essay-1749_extra02.JPG",
    "simon-essay-1749_extra03.JPG",
    "simon-essay-1749_extra04.JPG",
    "simon-essay-1749_extra05.JPG",
    "simon-essay-1749_extra06.JPG",
    "simon-essay-1749_extra07.JPG",
    "simon-essay-1749_extra08.JPG",
    "simon-essay-1749_plate.JPG",
    "simon-essay-1749_title.JPG",
    "spine-essay-1749_spine-orig",
    ".JPG"
  ],
  "smith-cure-1738": [
    "smith-cure-1738_platevol01.JPG",
    "smith-cure-1738_platevol02.JPG",
    "smith-cure-1738_spine-origvol01.JPG",
    "smith-cure-1738_spine-origvol02.JPG",
    "smith-cure-1738_spine-origvols01to02.JPG",
    "smith-cure-1738_titlevol01.JPG",
    "smith-cure-1738_titlevol02.JPG"
  ],
  "smith-republica-1630": [
    "smith-republica-1630_plate.JPG",
    "smith-republica-1630_spine-orig.JPG",
    "smith-republica-1630_title.JPG"
  ],
  "southey-book-1824": [
    "southey-book-1824_platevol01.JPG",
    "southey-book-1824_platevol02.JPG",
    "southey-book-1824_spine-origvol01.JPG",
    "southey-book-1824_spine-origvol02.JPG",
    "southey-book-1824_spine-origvols01to02.JPG",
    "southey-book-1824_titlevol01.JPG",
    "southey-book-1824_titlevol02.JPG"
  ],
  "southey-life-1814": [
    "southey-life-1814_cover.JPG",
    "southey-life-1814_margin01.JPG",
    "southey-life-1814_margin02.JPG",
    "southey-life-1814_spine-orig.JPG",
    "southey-life-1814_title01.JPG",
    "southey-life-1814_title02.JPG",
    "southey-life-1814_title03.JPG"
  ],
  "southey-roderick-1815": [
    "southey-roderick-1815_extravol01.JPG",
    "southey-roderick-1815_platevol01.JPG",
    "southey-roderick-1815_spine-origvols01to02.JPG",
    "southey-roderick-1815_title01vol01.JPG",
    "southey-roderick-1815_title02vol01.JPG"
  ],
  "speed-historie-1623": [
    "speed-historie-1623_plate.JPG",
    "speed-historie-1623_spine-orig.JPG",
    "speed-historie-1623_title.JPG"
  ],
  "spelman-english-1727": [
    "spelman-english-1727_extra01.JPG",
    "spelman-english-1727_extra02.JPG",
    "spelman-english-1727_extra03.JPG",
    "spelman-english-1727_plate.JPG",
    "spelman-english-1727_spine-orig.JPG",
    "spelman-english-1727_title.JPG"
  ],
  "stackhouse-new-1733": [
    "stackhouse-new-1733_platevol02.JPG",
    "stackhouse-new-1733_spine-origvol02.JPG",
    "stackhouse-new-1733_titlevol02.JPG"
  ],
  "stahl-regulae-1672": [
    "stahl-regulae-1672_plate.JPG",
    "stahl-regulae-1672_spine-orig.JPG",
    "stahl-regulae-1672_title.JPG"
  ],
  "sterne-sermons-1765": [
    "sterne-sermons-1765_platevol01.JPG",
    "sterne-sermons-1765_platevol02.JPG",
    "sterne-sermons-1765_platevol03.JPG",
    "sterne-sermons-1765_platevol04.JPG",
    "sterne-sermons-1765_spine-origvol01.jpg",
    "sterne-sermons-1765_spine-origvol02.jpg",
    "sterne-sermons-1765_spine-origvol03.jpg",
    "sterne-sermons-1765_spine-origvol04.jpg",
    "sterne-sermons-1765_titlevol01.JPG",
    "sterne-sermons-1765_titlevol02.JPG",
    "sterne-sermons-1765_titlevol03.JPG",
    "sterne-sermons-1765_titlevol04.JPG"
  ],
  "stillingfleet-origines-1675": [
    "stillingfleet-origines-1675_plate.JPG",
    "stillingfleet-origines-1675_spine-orig.JPG",
    "stillingfleet-origines-1675_title.JPG"
  ],
  "strada-prolusiones-1745": [
    "strada-prolusiones-1745_plate.JPG",
    "strada-prolusiones-1745_spine-orig.JPG",
    "strada-prolusiones-1745_title.JPG"
  ],
  "suetonius-tranquilli-1714": [
    "suetonius-tranquilli-1714_extravol02.JPG",
    "suetonius-tranquilli-1714_platevol01.JPG",
    "suetonius-tranquilli-1714_platevol02.JPG",
    "suetonius-tranquilli-1714_spine-origvol02.JPG",
    "suetonius-tranquilli-1714_spine-origvols01to02.JPG",
    "suetonius-tranquilli-1714_title01vol01.JPG",
    "suetonius-tranquilli-1714_title02vol01.JPG",
    "suetonius-tranquilli-1714_titlevol02.JPG"
  ],
  "tacitus-opera-1721": [
    "tacitus-opera-1721_endpapervol01.JPG",
    "tacitus-opera-1721_endpapervol02.JPG",
    "tacitus-opera-1721_marginvol01.JPG",
    "tacitus-opera-1721_spine-origvol01.JPG",
    "tacitus-opera-1721_spine-origvol02.JPG",
    "tacitus-opera-1721_spine-origvols01to02.JPG",
    "tacitus-opera-1721_titlevol01.JPG",
    "tacitus-opera-1721_titlevol02.JPG"
  ],
  "tacitus-optimis-1678": [
    "tacitus-optimis-1678_plate.JPG",
    "tacitus-optimis-1678_spine-orig.JPG",
    "tacitus-optimis-1678_title.JPG"
  ],
  "taylor-worthy-1701": [
    "taylor-worthy-1701_extra01.JPG",
    "taylor-worthy-1701_extra02.JPG",
    "taylor-worthy-1701_plate.JPG",
    "taylor-worthy-1701_spine-orig.JPG",
    "taylor-worthy-1701_title.JPG"
  ],
  "temple-memoirs-1709": [
    "temple-memoirs-1709_plate.JPG",
    "temple-memoirs-1709_spine-orig.JPG",
    "temple-memoirs-1709_title.JPG"
  ],
  "templeman-curious-1753": [
    "templeman-curious-1753_extra01.JPG",
    "templeman-curious-1753_extra02.JPG",
    "templeman-curious-1753_extra03.JPG",
    "templeman-curious-1753_extra04.JPG",
    "templeman-curious-1753_extra05.JPG",
    "templeman-curious-1753_extra06.JPG",
    "templeman-curious-1753_extra07.JPG",
    "templeman-curious-1753_extra08.JPG",
    "templeman-curious-1753_platevol01.JPG",
    "templeman-curious-1753_platevol02.JPG",
    "templeman-curious-1753_spine-orig01vol01.JPG",
    "templeman-curious-1753_spine-orig02vol01.JPG",
    "templeman-curious-1753_spine-origvol02.JPG",
    "templeman-curious-1753_titlevol01.JPG",
    "templeman-curious-1753_titlevol2.JPG"
  ],
  "terence-afri-1751": [
    "terence-afri-1751_plate.JPG",
    "terence-afri-1751_spine-orig.JPG",
    "terence-afri-1751_title.JPG"
  ],
  "terence-comoediae-1676": [
    "terence-comoediae-1676_spine-orig.JPG",
    "terence-comoediae-1676_title.JPG"
  ],
  "theocritus-theokirtou-1743": [
    "theocritus-theokirtou-1743_extra01.JPG",
    "theocritus-theokirtou-1743_extra02.JPG",
    "theocritus-theokirtou-1743_extra03.JPG",
    "theocritus-theokirtou-1743_extra04.JPG",
    "theocritus-theokirtou-1743_extra05.JPG",
    "theocritus-theokirtou-1743_extra06.JPG",
    "theocritus-theokirtou-1743_extra07.JPG",
    "theocritus-theokirtou-1743_extra08.JPG",
    "theocritus-theokirtou-1743_extra09.JPG",
    "theocritus-theokirtou-1743_extra10.JPG",
    "theocritus-theokirtou-1743_extra11.JPG",
    "theocritus-theokirtou-1743_extra12.JPG",
    "theocritus-theokirtou-1743_extra13.JPG",
    "theocritus-theokirtou-1743_extra14.JPG",
    "theocritus-theokirtou-1743_extra15.JPG",
    "theocritus-theokirtou-1743_extra16.JPG",
    "theocritus-theokirtou-1743_extra17.JPG",
    "theocritus-theokirtou-1743_extra18.JPG",
    "theocritus-theokirtou-1743_extra19.JPG",
    "theocritus-theokirtou-1743_extra20.JPG",
    "theocritus-theokirtou-1743_extra21.JPG",
    "theocritus-theokirtou-1743_extra22.JPG",
    "theocritus-theokirtou-1743_extra23.JPG",
    "theocritus-theokirtou-1743_extra24.JPG",
    "theocritus-theokirtou-1743_plate.JPG",
    "theocritus-theokirtou-1743_spine-orig.JPG",
    "theocritus-theokirtou-1743_title.JPG"
  ],
  "thucydides-histoire-1662": [
    "thucydides-histoire-1662_plate.JPG",
    "thucydides-histoire-1662_spine-orig.JPG",
    "thucydides-histoire-1662_title.JPG"
  ],
  "thurloe-collection-1742": [
    "thurloe-collection-1742_platevol01.JPG",
    "thurloe-collection-1742_platevol02.JPG",
    "thurloe-collection-1742_platevol03.JPG",
    "thurloe-collection-1742_platevol04.JPG",
    "thurloe-collection-1742_platevol05.JPG",
    "thurloe-collection-1742_platevol06.JPG",
    "thurloe-collection-1742_platevol07.JPG",
    "thurloe-collection-1742_spine-origvol01.JPG",
    "thurloe-collection-1742_spine-origvol02.JPG",
    "thurloe-collection-1742_spine-origvol03.JPG",
    "thurloe-collection-1742_spine-origvol04.JPG",
    "thurloe-collection-1742_spine-origvol05.JPG",
    "thurloe-collection-1742_spine-origvol06.JPG",
    "thurloe-collection-1742_spine-origvol07.JPG",
    "thurloe-collection-1742_titlevol01.JPG",
    "thurloe-collection-1742_titlevol02.JPG",
    "thurloe-collection-1742_titlevol03.JPG",
    "thurloe-collection-1742_titlevol04.JPG",
    "thurloe-collection-1742_titlevol05.JPG",
    "thurloe-collection-1742_titlevol06.JPG",
    "thurloe-collection-1742_titlevol07.JPG"
  ],
  "tillotson-works-1728": [
    "tillotson-works-1728_platevol01.JPG",
    "tillotson-works-1728_platevol02.JPG",
    "tillotson-works-1728_platevol03.JPG",
    "tillotson-works-1728_spine-origvol01.JPG",
    "tillotson-works-1728_spine-origvol02.JPG",
    "tillotson-works-1728_spine-origvol03.JPG",
    "tillotson-works-1728_spine-origvols01to03.JPG",
    "tillotson-works-1728_titlevol01.JPG",
    "tillotson-works-1728_titlevol02.JPG",
    "tillotson-works-1728_titlevol03.JPG"
  ],
  "trapp-popery-1727": [
    "trapp-popery-1727_margin.JPG",
    "trapp-popery-1727_plate.JPG",
    "trapp-popery-1727_spine-orig.JPG",
    "trapp-popery-1727_title.JPG"
  ],
  "trapp-praelectiones-1711": [
    "trapp-praelectiones-1711_plate.JPG",
    "trapp-praelectiones-1711_spine-orig.JPG",
    "trapp-praelectiones-1711_title.JPG"
  ],
  "tscharner-dictionnaire-1788": [
    "tscharner-dictionnaire-1788_spine-origvol01.JPG",
    "tscharner-dictionnaire-1788_spine-origvol03.JPG",
    "tscharner-dictionnaire-1788_title01vol01.JPG",
    "tscharner-dictionnaire-1788_title02vol01.JPG",
    "tscharner-dictionnaire-1788_titlevol03.JPG",
    "tscharner-dictionnaire-1788_vols01and03.JPG"
  ],
  "tunstall-lectures-1765": [
    "tunstall-lectures-1765_plate.JPG",
    "tunstall-lectures-1765_spine-orig.JPG",
    "tunstall-lectures-1765_title.JPG"
  ],
  "unlisted-american-1762": [
    "unlisted-american-1762_extra01vol03.JPG",
    "unlisted-american-1762_extra02vol03.JPG",
    "unlisted-american-1762_platevol01.JPG",
    "unlisted-american-1762_platevol02.JPG",
    "unlisted-american-1762_platevol03.JPG",
    "unlisted-american-1762_spine-origvols01to03.JPG",
    "unlisted-american-1762_title01vol01.JPG",
    "unlisted-american-1762_title01vol02.JPG",
    "unlisted-american-1762_title01vol03.JPG",
    "unlisted-american-1762_title02vol01.JPG",
    "unlisted-american-1762_title02vol02.JPG",
    "unlisted-american-1762_title02vol03.JPG"
  ],
  "unlisted-annual-1758": [
    "unlisted-annual-1758_extra01vol06.JPG",
    "unlisted-annual-1758_extra02vol06.JPG",
    "unlisted-annual-1758_extra03vol06.JPG",
    "unlisted-annual-1758_extra04vol06.JPG",
    "unlisted-annual-1758_extravol08.JPG",
    "unlisted-annual-1758_platevol01.JPG",
    "unlisted-annual-1758_platevol02.JPG",
    "unlisted-annual-1758_platevol03.JPG",
    "unlisted-annual-1758_platevol05.JPG",
    "unlisted-annual-1758_platevol06.JPG",
    "unlisted-annual-1758_platevol07.JPG",
    "unlisted-annual-1758_platevol08.JPG",
    "unlisted-annual-1758_platevol09.JPG",
    "unlisted-annual-1758_platevol10.JPG",
    "unlisted-annual-1758_platevol11.JPG",
    "unlisted-annual-1758_platevol12.JPG",
    "unlisted-annual-1758_platevol13.JPG",
    "unlisted-annual-1758_platevol14.JPG",
    "unlisted-annual-1758_platevol15.JPG",
    "unlisted-annual-1758_platevol18.JPG",
    "unlisted-annual-1758_platevol19.JPG",
    "unlisted-annual-1758_spine-oirgvols01to04.JPG",
    "unlisted-annual-1758_spine-origvol05.jpg",
    "unlisted-annual-1758_spine-origvol06.JPG",
    "unlisted-annual-1758_spine-origvol07.JPG",
    "unlisted-annual-1758_spine-origvol08.JPG",
    "unlisted-annual-1758_spine-origvols09to12.JPG",
    "unlisted-annual-1758_spine-origvols13to16.JPG",
    "unlisted-annual-1758_spine-origvols17to19.JPG",
    "unlisted-annual-1758_titlevol01.JPG",
    "unlisted-annual-1758_titlevol02.JPG",
    "unlisted-annual-1758_titlevol03.JPG",
    "unlisted-annual-1758_titlevol04.JPG",
    "unlisted-annual-1758_titlevol05.JPG",
    "unlisted-annual-1758_titlevol06.JPG",
    "unlisted-annual-1758_titlevol07.JPG",
    "unlisted-annual-1758_titlevol08.JPG",
    "unlisted-annual-1758_titlevol09.JPG",
    "unlisted-annual-1758_titlevol10.JPG",
    "unlisted-annual-1758_titlevol11.JPG",
    "unlisted-annual-1758_titlevol12.JPG",
    "unlisted-annual-1758_titlevol13.JPG",
    "unlisted-annual-1758_titlevol14.JPG",
    "unlisted-annual-1758_titlevol15.JPG",
    "unlisted-annual-1758_titlevol16.JPG",
    "unlisted-annual-1758_titlevol17.JPG",
    "unlisted-annual-1758_titlevol18.JPG",
    "unlisted-annual-1758_titlevol19.JPG"
  ],
  "unlisted-annual-1777": [
    "unlisted-annual-1777_platevol01.JPG",
    "unlisted-annual-1777_platevol02.JPG",
    "unlisted-annual-1777_platevol03.JPG",
    "unlisted-annual-1777_platevol04.JPG",
    "unlisted-annual-1777_spine-origvol04.JPG",
    "unlisted-annual-1777_spine-origvol05.JPG",
    "unlisted-annual-1777_spine-origvols01to03.JPG",
    "unlisted-annual-1777_titlevol01.JPG",
    "unlisted-annual-1777_titlevol02.JPG",
    "unlisted-annual-1777_titlevol03.JPG",
    "unlisted-annual-1777_titlevol04.JPG",
    "unlisted-annual-1777_titlevol05.JPG"
  ],
  "unlisted-collection-1725": [
    "unlisted-collection-1725_plate.JPG",
    "unlisted-collection-1725_spine-orig.JPG",
    "unlisted-collection-1725_title.JPG"
  ],
  "unlisted-complete-1706": [
    "unlisted-complete-1706_platevol01.JPG",
    "unlisted-complete-1706_platevol02.JPG",
    "unlisted-complete-1706_platevol03.JPG",
    "unlisted-complete-1706_spine-origvol02.JPG",
    "unlisted-complete-1706_spine-origvols01to03.JPG",
    "unlisted-complete-1706_titlevol01.JPG",
    "unlisted-complete-1706_titlevol02.JPG",
    "unlisted-complete-1706_titlevol03.JPG"
  ],
  "unlisted-historical-1724": [
    "unlisted-historical-1724_margin01vol03.JPG",
    "unlisted-historical-1724_margin02vol03.JPG",
    "unlisted-historical-1724_margin03vol03.JPG",
    "unlisted-historical-1724_margin04vol03.JPG",
    "unlisted-historical-1724_margin05vol03.JPG",
    "unlisted-historical-1724_margin06vol03.JPG",
    "unlisted-historical-1724_margin07vol03.JPG",
    "unlisted-historical-1724_margin08vol03.JPG",
    "unlisted-historical-1724_margin09vol03.JPG",
    "unlisted-historical-1724_platevol01.JPG",
    "unlisted-historical-1724_platevol02.JPG",
    "unlisted-historical-1724_platevol03.JPG",
    "unlisted-historical-1724_platevol04.JPG",
    "unlisted-historical-1724_platevol05.JPG",
    "unlisted-historical-1724_platevol06.JPG",
    "unlisted-historical-1724_platevol07.JPG",
    "unlisted-historical-1724_platevol08.JPG",
    "unlisted-historical-1724_platevol09.JPG",
    "unlisted-historical-1724_platevol10.JPG",
    "unlisted-historical-1724_platevol11.JPG",
    "unlisted-historical-1724_platevol12.JPG",
    "unlisted-historical-1724_platevol13.JPG",
    "unlisted-historical-1724_platevol14.JPG",
    "unlisted-historical-1724_platevol15.JPG",
    "unlisted-historical-1724_platevol16.JPG",
    "unlisted-historical-1724_platevol17.JPG",
    "unlisted-historical-1724_platevol18.JPG",
    "unlisted-historical-1724_platevol19.JPG",
    "unlisted-historical-1724_platevol20.JPG",
    "unlisted-historical-1724_platevol21.JPG",
    "unlisted-historical-1724_platevol22.JPG",
    "unlisted-historical-1724_platevol23.JPG",
    "unlisted-historical-1724_platevol24.JPG",
    "unlisted-historical-1724_platevol25.JPG",
    "unlisted-historical-1724_spine-origvol11.JPG",
    "unlisted-historical-1724_spine-origvol12.JPG",
    "unlisted-historical-1724_spine-origvol13.JPG",
    "unlisted-historical-1724_spine-origvol14.JPG",
    "unlisted-historical-1724_spine-origvol15.JPG",
    "unlisted-historical-1724_spine-origvol16.JPG",
    "unlisted-historical-1724_spine-origvol17.JPG",
    "unlisted-historical-1724_spine-origvol18.JPG",
    "unlisted-historical-1724_spine-origvol19.JPG",
    "unlisted-historical-1724_spine-origvol20.JPG",
    "unlisted-historical-1724_spine-origvols01to05.JPG",
    "unlisted-historical-1724_spine-origvols06to10.JPG",
    "unlisted-historical-1724_spine-origvols21to25.JPG",
    "unlisted-historical-1724_titlevol01.JPG",
    "unlisted-historical-1724_titlevol02.JPG",
    "unlisted-historical-1724_titlevol03.JPG",
    "unlisted-historical-1724_titlevol04.JPG",
    "unlisted-historical-1724_titlevol05.JPG",
    "unlisted-historical-1724_titlevol06.JPG",
    "unlisted-historical-1724_titlevol07.JPG",
    "unlisted-historical-1724_titlevol08.JPG",
    "unlisted-historical-1724_titlevol09.JPG",
    "unlisted-historical-1724_titlevol10.JPG",
    "unlisted-historical-1724_titlevol11.JPG",
    "unlisted-historical-1724_titlevol12.JPG",
    "unlisted-historical-1724_titlevol13.JPG",
    "unlisted-historical-1724_titlevol14.JPG",
    "unlisted-historical-1724_titlevol15.JPG",
    "unlisted-historical-1724_titlevol16.JPG",
    "unlisted-historical-1724_titlevol17.JPG",
    "unlisted-historical-1724_titlevol18.JPG",
    "unlisted-historical-1724_titlevol19.JPG",
    "unlisted-historical-1724_titlevol20.JPG",
    "unlisted-historical-1724_titlevol21.JPG",
    "unlisted-historical-1724_titlevol22.JPG",
    "unlisted-historical-1724_titlevol23.JPG",
    "unlisted-historical-1724_titlevol24.JPG",
    "unlisted-historical-1724_titlevol25.JPG"
  ],
  "unlisted-history-1713": [
    "unlisted-history-1713_plate.JPG",
    "unlisted-history-1713_spine-orig.JPG",
    "unlisted-history-1713_title.JPG"
  ],
  "unlisted-parliamentary-1751": [
    "unlisted-parliamentary-1751_platevol01.JPG",
    "unlisted-parliamentary-1751_platevol02.JPG",
    "unlisted-parliamentary-1751_platevol03.JPG",
    "unlisted-parliamentary-1751_platevol04.JPG",
    "unlisted-parliamentary-1751_platevol05.JPG",
    "unlisted-parliamentary-1751_platevol06.JPG",
    "unlisted-parliamentary-1751_platevol07.JPG",
    "unlisted-parliamentary-1751_platevol08.JPG",
    "unlisted-parliamentary-1751_platevol09.JPG",
    "unlisted-parliamentary-1751_platevol10.JPG",
    "unlisted-parliamentary-1751_platevol11.JPG",
    "unlisted-parliamentary-1751_platevol12.JPG",
    "unlisted-parliamentary-1751_platevol13.JPG",
    "unlisted-parliamentary-1751_platevol14.JPG",
    "unlisted-parliamentary-1751_platevol15.JPG",
    "unlisted-parliamentary-1751_platevol16.JPG",
    "unlisted-parliamentary-1751_platevol17.JPG",
    "unlisted-parliamentary-1751_platevol18.JPG",
    "unlisted-parliamentary-1751_platevol19.JPG",
    "unlisted-parliamentary-1751_platevol20.JPG",
    "unlisted-parliamentary-1751_spine-origvol01.jpg",
    "unlisted-parliamentary-1751_spine-origvol02.jpg",
    "unlisted-parliamentary-1751_spine-origvol03.JPG",
    "unlisted-parliamentary-1751_spine-origvol04.JPG",
    "unlisted-parliamentary-1751_spine-origvol05.jpg",
    "unlisted-parliamentary-1751_spine-origvol06.jpg",
    "unlisted-parliamentary-1751_spine-origvol07.jpg",
    "unlisted-parliamentary-1751_spine-origvol08.JPG",
    "unlisted-parliamentary-1751_spine-origvol09.JPG",
    "unlisted-parliamentary-1751_spine-origvol10.JPG",
    "unlisted-parliamentary-1751_spine-origvol12.JPG",
    "unlisted-parliamentary-1751_spine-origvol13.jpg",
    "unlisted-parliamentary-1751_spine-origvol14.JPG",
    "unlisted-parliamentary-1751_spine-origvol15.jpg",
    "unlisted-parliamentary-1751_spine-origvol16.jpg",
    "unlisted-parliamentary-1751_titlevol01.JPG",
    "unlisted-parliamentary-1751_titlevol02.JPG",
    "unlisted-parliamentary-1751_titlevol03.JPG",
    "unlisted-parliamentary-1751_titlevol04.JPG",
    "unlisted-parliamentary-1751_titlevol05.JPG",
    "unlisted-parliamentary-1751_titlevol06.JPG",
    "unlisted-parliamentary-1751_titlevol07.JPG",
    "unlisted-parliamentary-1751_titlevol08.JPG",
    "unlisted-parliamentary-1751_titlevol09.JPG",
    "unlisted-parliamentary-1751_titlevol10.JPG",
    "unlisted-parliamentary-1751_titlevol11.JPG",
    "unlisted-parliamentary-1751_titlevol12.JPG",
    "unlisted-parliamentary-1751_titlevol13.JPG",
    "unlisted-parliamentary-1751_titlevol14.JPG",
    "unlisted-parliamentary-1751_titlevol15.JPG",
    "unlisted-parliamentary-1751_titlevol16.JPG",
    "unlisted-parliamentary-1751_titlevol17.JPG",
    "unlisted-parliamentary-1751_titlevol18.JPG",
    "unlisted-parliamentary-1751_titlevol19.JPG",
    "unlisted-parliamentary-1751_titlevol20.JPG"
  ],
  "unlisted-poetae-1777": [
    "unlisted-poetae-1777_extra.JPG",
    "unlisted-poetae-1777_plate.JPG",
    "unlisted-poetae-1777_spine-orig.JPG",
    "unlisted-poetae-1777_title01.JPG",
    "unlisted-poetae-1777_title02.JPG"
  ],
  "unlisted-selectae-1775": [
    "unlisted-selectae-1775_plate.JPG",
    "unlisted-selectae-1775_spine-orig.JPG",
    "unlisted-selectae-1775_title01.JPG",
    "unlisted-selectae-1775_title02.JPG"
  ],
  "unlisted-universal-1740": [
    "unlisted-universal-1740_extra01vol05.JPG",
    "unlisted-universal-1740_extra01vol06.JPG",
    "unlisted-universal-1740_extra01vol07.JPG",
    "unlisted-universal-1740_extra02vol05.JPG",
    "unlisted-universal-1740_extra02vol06.JPG",
    "unlisted-universal-1740_extra02vol07.JPG",
    "unlisted-universal-1740_extra03vol05.JPG",
    "unlisted-universal-1740_extra03vol07.JPG",
    "unlisted-universal-1740_extra04vol05.JPG",
    "unlisted-universal-1740_extra04vol07.JPG",
    "unlisted-universal-1740_extra05vol05.JPG",
    "unlisted-universal-1740_extra06vol05.JPG",
    "unlisted-universal-1740_platevol05.JPG",
    "unlisted-universal-1740_platevol06.JPG",
    "unlisted-universal-1740_platevol07.JPG",
    "unlisted-universal-1740_spine-orgvol05.JPG",
    "unlisted-universal-1740_spine-origvol06.JPG",
    "unlisted-universal-1740_spine-origvol07.JPG",
    "unlisted-universal-1740_titlevol05.JPG",
    "unlisted-universal-1740_titlevol06.JPG",
    "unlisted-universal-1740_titlevol07.JPG"
  ],
  "urban-poemata-1726": [
    "urban-poemata-1726_margin01.JPG",
    "urban-poemata-1726_margin02.JPG",
    "urban-poemata-1726_margin03.JPG",
    "urban-poemata-1726_plate.JPG",
    "urban-poemata-1726_spine-orig.JPG",
    "urban-poemata-1726_title.JPG"
  ],
  "vaniere-praedium-1746": [
    "vaniere-praedium-1746_plate.JPG",
    "vaniere-praedium-1746_spine-orig.JPG",
    "vaniere-praedium-1746_title.JPG"
  ],
  "viger-praecipuis-1729": [
    "viger-praecipuis-1729_plate.JPG",
    "viger-praecipuis-1729_spine-orig.JPG",
    "viger-praecipuis-1729_title.JPG"
  ],
  "viner-general-1742": [
    "viner-general-1742_platevol01.JPG",
    "viner-general-1742_platevol02.JPG",
    "viner-general-1742_platevol03.JPG",
    "viner-general-1742_platevol04.JPG",
    "viner-general-1742_platevol05.JPG",
    "viner-general-1742_platevol06.JPG",
    "viner-general-1742_platevol07.JPG",
    "viner-general-1742_platevol08.JPG",
    "viner-general-1742_platevol09.JPG",
    "viner-general-1742_platevol10.JPG",
    "viner-general-1742_platevol11.JPG",
    "viner-general-1742_platevol12.JPG",
    "viner-general-1742_platevol13.JPG",
    "viner-general-1742_platevol14.JPG",
    "viner-general-1742_platevol15.JPG",
    "viner-general-1742_platevol16.JPG",
    "viner-general-1742_platevol17.JPG",
    "viner-general-1742_platevol18.JPG",
    "viner-general-1742_platevol19.JPG",
    "viner-general-1742_platevol20.JPG",
    "viner-general-1742_platevol21.JPG",
    "viner-general-1742_platevol22.JPG",
    "viner-general-1742_platevol23.JPG",
    "viner-general-1742_spine-origvol01.JPG",
    "viner-general-1742_spine-origvol02.JPG",
    "viner-general-1742_spine-origvol03.JPG",
    "viner-general-1742_spine-origvol04.JPG",
    "viner-general-1742_spine-origvol05.JPG",
    "viner-general-1742_spine-origvol06.JPG",
    "viner-general-1742_spine-origvol07.JPG",
    "viner-general-1742_spine-origvol08.JPG",
    "viner-general-1742_spine-origvol09.JPG",
    "viner-general-1742_spine-origvol10.JPG",
    "viner-general-1742_spine-origvol11.JPG",
    "viner-general-1742_spine-origvol12.JPG",
    "viner-general-1742_spine-origvol13.JPG",
    "viner-general-1742_spine-origvol14.JPG",
    "viner-general-1742_spine-origvol15.JPG",
    "viner-general-1742_spine-origvol16.JPG",
    "viner-general-1742_spine-origvol17.JPG",
    "viner-general-1742_spine-origvol18.JPG",
    "viner-general-1742_spine-origvol19.JPG",
    "viner-general-1742_spine-origvol20.JPG",
    "viner-general-1742_spine-origvol21.JPG",
    "viner-general-1742_spine-origvol22.JPG",
    "viner-general-1742_spine-origvol23.JPG",
    "viner-general-1742_title01.JPG",
    "viner-general-1742_title02.JPG",
    "viner-general-1742_title03.JPG",
    "viner-general-1742_title04.JPG",
    "viner-general-1742_title05.JPG",
    "viner-general-1742_title06.JPG",
    "viner-general-1742_title07.JPG",
    "viner-general-1742_title08.JPG",
    "viner-general-1742_title09.JPG",
    "viner-general-1742_title10.JPG",
    "viner-general-1742_title11.JPG",
    "viner-general-1742_title12.JPG",
    "viner-general-1742_title13.JPG",
    "viner-general-1742_title14.JPG",
    "viner-general-1742_title15.JPG",
    "viner-general-1742_title16.JPG",
    "viner-general-1742_title17.JPG",
    "viner-general-1742_title18.JPG",
    "viner-general-1742_title19.JPG",
    "viner-general-1742_title20.JPG",
    "viner-general-1742_title21.JPG",
    "viner-general-1742_title22.JPG",
    "viner-general-1742_title23.JPG"
  ],
  "virgil-maronis-1687": [
    "virgil-maronis-1687_margin.JPG",
    "virgil-maronis-1687_plate.JPG",
    "virgil-maronis-1687_spine-orig.jpg",
    "virgil-maronis-1687_title.JPG"
  ],
  "volney-travels-1787": [
    "volney-travels-1787_cover01.JPG",
    "volney-travels-1787_cover02.JPG",
    "volney-travels-1787_extra01.JPG",
    "volney-travels-1787_extra02.JPG",
    "volney-travels-1787_plate.JPG",
    "volney-travels-1787_spine-orig.JPG",
    "volney-travels-1787_title01.JPG",
    "volney-travels-1787_title02.jpg"
  ],
  "voltaire-history-1732": [
    "voltaire-history-1732_plate.JPG",
    "voltaire-history-1732_spine-orig.JPG",
    "voltaire-history-1732_title.JPG"
  ],
  "voltaire-melange-1770": [
    "voltaire-melange-1770_platevol01.JPG",
    "voltaire-melange-1770_platevol02.JPG",
    "voltaire-melange-1770_platevol03.JPG",
    "voltaire-melange-1770_platevol04.JPG",
    "voltaire-melange-1770_platevol05.JPG",
    "voltaire-melange-1770_platevol06.JPG",
    "voltaire-melange-1770_platevol07.JPG",
    "voltaire-melange-1770_platevol08.JPG",
    "voltaire-melange-1770_platevol09.JPG",
    "voltaire-melange-1770_platevol10.JPG",
    "voltaire-melange-1770_spine-origvols01to10.JPG",
    "voltaire-melange-1770_spine-origvols11to14.JPG",
    "voltaire-melange-1770_title01vol01.JPG",
    "voltaire-melange-1770_title01vol02.JPG",
    "voltaire-melange-1770_title01vol03.JPG",
    "voltaire-melange-1770_title01vol04.JPG",
    "voltaire-melange-1770_title01vol05.JPG",
    "voltaire-melange-1770_title01vol06.JPG",
    "voltaire-melange-1770_title01vol07.JPG",
    "voltaire-melange-1770_title01vol08.JPG",
    "voltaire-melange-1770_title01vol09.JPG",
    "voltaire-melange-1770_title01vol10.JPG",
    "voltaire-melange-1770_title02vol01.JPG",
    "voltaire-melange-1770_title02vol02.JPG",
    "voltaire-melange-1770_title02vol03.JPG",
    "voltaire-melange-1770_title02vol04.JPG",
    "voltaire-melange-1770_title02vol05.JPG",
    "voltaire-melange-1770_title02vol07.JPG",
    "voltaire-melange-1770_title02vol10.JPG"
  ],
  "voltaire-parlement-1771": [
    "voltaire-parlement-1771_plate.JPG",
    "voltaire-parlement-1771_spine-orig.JPG",
    "voltaire-parlement-1771_title01.JPG",
    "voltaire-parlement-1771_title02.JPG"
  ],
  "warton-essay-1762": [
    "warton-essay-1762_plate.JPG",
    "warton-essay-1762_spine-orig.jpg",
    "warton-essay-1762_title.JPG"
  ],
  "watson-history-1778": [
    "watson-history-1778_platevol01.JPG",
    "watson-history-1778_platevol02.JPG",
    "watson-history-1778_spine-orig02vol02.JPG",
    "watson-history-1778_spine-origvol01.jpg",
    "watson-history-1778_spine-origvol02.jpg",
    "watson-history-1778_title01vol01.JPG",
    "watson-history-1778_title01vol02.JPG",
    "watson-history-1778_title02vol01.JPG",
    "watson-history-1778_title02vol02.JPG"
  ],
  "webb-inquiry-1760": [
    "webb-inquiry-1760_cover.JPG",
    "webb-inquiry-1760_plate.png",
    "webb-inquiry-1760_title.JPG"
  ],
  "west-letters-1811": [
    "west-letters-1811_spine-orig.JPG",
    "west-letters-1811_title.JPG"
  ],
  "whatley-short-1738_margin": [
    "whatley-short-1738_margin.JPG",
    "whatley-short-1738_plate.JPG",
    "whatley-short-1738_spine-orig.JPG",
    "whatley-short-1738_title.JPG"
  ],
  "white-sermons-1784": [
    "white-sermons-1784_extra.JPG",
    "white-sermons-1784_plate.JPG",
    "white-sermons-1784_spine-orig.JPG",
    "white-sermons-1784_title.JPG"
  ],
  "wilkes-political-1762": [
    "wilkes-political-1762_platevol01.JPG",
    "wilkes-political-1762_platevol02.JPG",
    "wilkes-political-1762_platevol03.JPG",
    "wilkes-political-1762_platevol04.JPG",
    "wilkes-political-1762_platevol05.JPG",
    "wilkes-political-1762_spine-origvol01.JPG",
    "wilkes-political-1762_spine-origvol02.JPG",
    "wilkes-political-1762_spine-origvol03.JPG",
    "wilkes-political-1762_spine-origvol04.JPG",
    "wilkes-political-1762_spine-origvol05.JPG",
    "wilkes-political-1762_spine-origvols01to05.JPG",
    "wilkes-political-1762_titlevol01.JPG",
    "wilkes-political-1762_titlevol02.JPG",
    "wilkes-political-1762_titlevol03.JPG",
    "wilkes-political-1762_titlevol04.JPG",
    "wilkes-political-1762_titlevol05.JPG"
  ],
  "willis-notitia-1730": [
    "willis-notitia-1730_platevol01.JPG",
    "willis-notitia-1730_platevol02.JPG",
    "willis-notitia-1730_spine-origvol01.JPG",
    "willis-notitia-1730_spine-origvol02.jpg",
    "willis-notitia-1730_titlevol01.JPG",
    "willis-notitia-1730_titlevol02.JPG"
  ],
  "wood-essay-1775": [
    "wood-essay-1775_cover.JPG",
    "wood-essay-1775_extra.JPG",
    "wood-essay-1775_plate.JPG",
    "wood-essay-1775_spine-orig.JPG",
    "wood-essay-1775_title.JPG"
  ],
  "wraxall-memoirs-1777": [
    "wraxall-memoirs-1777_platevol01.JPG",
    "wraxall-memoirs-1777_platevol02.JPG",
    "wraxall-memoirs-1777_spine-orig.JPG",
    "wraxall-memoirs-1777_titlevol01.JPG",
    "wraxall-memoirs-1777_titlevol02.JPG"
  ],
  "wraxall-tour-1784": [
    "wraxall-tour-1784_plate.jpg",
    "wraxall-tour-1784_spine-orig.jpg",
    "wraxall-tour-1784_title.jpg"
  ],
  "xenophon-cyropaedia-1679": [
    "xenophon-cyropaedia-1679_plate.JPG",
    "xenophon-cyropaedia-1679_spine-orig.jpg",
    "xenophon-cyropaedia-1679_title.JPG"
  ],
  "zouch-elementa-1652": [
    "zouch-elementa-1652_plate.JPG",
    "zouch-elementa-1652_spine-orig.JPG",
    "zouch-elementa-1652_title.JPG"
  ]
}