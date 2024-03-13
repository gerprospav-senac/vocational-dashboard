export const getInstance = async () => {
  const JSZip = await import('jszip');
  const PDFMake = await import('pdfmake');
  const PDFMakeFonts = await import('@/component/visualization/table/vfs-fonts');
  const DataTable = await import('datatables.net-bs4');
  await import('datatables.net-buttons-bs4');
  
  //@ts-ignore
  await import('datatables.net-responsive-bs4/js/responsive.bootstrap4.min.mjs');
  //@ts-ignore
  await import('datatables.net-searchpanes-bs4/js/searchPanes.bootstrap4.min.mjs');
  //@ts-ignore
  await import('datatables.net-buttons/js/buttons.html5.mjs');
  //@ts-ignore
  await import('datatables.net-buttons/js/buttons.print.mjs');
  //@ts-ignore
  await import('datatables.net-buttons/js/buttons.colVis.mjs');

  //@ts-ignore 
  DataTable.default.Buttons.jszip(JSZip.default);

  //@ts-ignore
  DataTable.default.Buttons.pdfMake(Object.assign(PDFMake.default, { vfs: PDFMakeFonts.default }));

  return DataTable.default;
};