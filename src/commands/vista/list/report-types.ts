import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('vista', 'vista.list.report-types');

export type VistaListReportTypesResult = {
  path: string;
};

export default class VistaListReportTypes extends SfCommand<VistaListReportTypesResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      description: messages.getMessage('flags.name.description'),
      char: 'n',
      required: false,
    }),
  };

  public async run(): Promise<VistaListReportTypesResult> {
    const { flags } = await this.parse(VistaListReportTypes);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /Users/andres/Projects/proj-plugins/vista/src/commands/vista/list/report-types.ts`);
    return {
      path: '/Users/andres/Projects/proj-plugins/vista/src/commands/vista/list/report-types.ts',
    };
  }
}
