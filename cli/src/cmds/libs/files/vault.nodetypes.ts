export const vaultNodeTypes = config =>
  `<'cq'='http://www.day.com/jcr/cq/1.0'>
<'nt'='http://www.jcp.org/jcr/nt/1.0'>
<'sling'='http://sling.apache.org/jcr/sling/1.0'>
<'mix'='http://www.jcp.org/jcr/mix/1.0'>
<'granite'='http://www.adobe.com/jcr/granite/1.0'>
<'rep'='internal'>

[cq:Widget] > nt:unstructured
  orderable
  - xtype (string)
  - title (string)
  - name (string)
  + items (nt:base) = cq:WidgetCollection

[cq:WidgetCollection] > nt:unstructured
  orderable
  + * (cq:Widget) = cq:Widget

[cq:ClientLibraryFolder] > sling:Folder
  - channels (string) multiple
  - categories (string) multiple
  - dependencies (string) multiple
  - embed (string) multiple

[sling:Folder] > nt:folder
  - * (undefined) multiple
  - * (undefined)
  + * (nt:base) = sling:Folder version

[cq:Component] > mix:title, nt:folder, sling:ResourceSuperType
  - * (undefined)
  - allowedChildren (string) multiple
  - dialogPath (string)
  - * (undefined) multiple
  - cq:isContainer (boolean)
  - cq:noDecoration (boolean)
  - cq:cellName (string)
  - allowedParents (string) multiple
  - componentGroup (string)
  + cq:childEditConfig (cq:EditConfig) = cq:EditConfig
  + design_dialog (nt:base) = nt:unstructured
  + * (nt:base) = nt:base multiple version
  + cq:infoProviders (nt:base) = nt:unstructured
  + virtual (nt:base) = sling:Folder
  + dialog (nt:base) = nt:unstructured
  + cq:htmlTag (nt:base) = nt:unstructured
  + cq:editConfig (cq:EditConfig) = cq:EditConfig
  + icon.png (nt:file)
  + thumbnail.png (nt:file)

[sling:ResourceSuperType]
  mixin
  - sling:resourceSuperType (string)

[cq:EditConfig] > nt:hierarchyNode, nt:unstructured
  orderable
  - cq:dialogMode (string) < 'auto', 'floating', 'inline'
  - cq:layout (string) < 'editbar', 'rollover', 'auto'
  - cq:actions (string) multiple
  - cq:emptyText (string)
  - cq:inherit (boolean)
  + cq:formParameters (nt:base) = nt:unstructured
  + cq:actionConfigs (nt:base) = nt:unstructured
  + cq:dropTargets (nt:base) = nt:unstructured
  + cq:inplaceEditing (cq:InplaceEditingConfig) = cq:InplaceEditingConfig
  + cq:listeners (nt:base) = cq:EditListenersConfig

[cq:InplaceEditingConfig] > nt:unstructured
  orderable
  - editorType (string)
  - configPath (string)
  - active (boolean)
  + config (nt:unstructured) = nt:unstructured

[cq:EditListenersConfig]
  - afteredit (string)
  - aftermove (string)
  - afterinsert (string)
  - * (undefined) multiple
  - aftercreate (string)
  - afterremove (string)
  - * (undefined)
  - afterdelete (string)
  + * (nt:base) = nt:base multiple version

[cq:DropTargetConfig] > nt:unstructured
  orderable
  - propertyName (string)
  - accept (string) multiple
  - groups (string) multiple
  + parameters (nt:base) = nt:unstructured

[cq:VirtualComponent] > mix:title, nt:folder
  - componentGroup (string)
  - * (undefined)
  - allowedParents (string) multiple
  - allowedChildren (string) multiple
  - * (undefined) multiple
  + cq:editConfig (cq:EditConfig) = cq:EditConfig
  + icon.png (nt:file)
  + thumbnail.png (nt:file)
  + * (nt:base) = nt:base multiple version

[granite:FinalArea]
  mixin

[cq:Dialog] > cq:Widget
  orderable

[rep:RepoAccessControllable]
  mixin
  + rep:repoPolicy (rep:Policy) protected ignore

`;
