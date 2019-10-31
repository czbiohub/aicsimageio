Search.setIndex({docnames:["aicsimageio","aicsimageio.readers","aicsimageio.vendor","aicsimageio.writers","contributing","index","installation","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["aicsimageio.rst","aicsimageio.readers.rst","aicsimageio.vendor.rst","aicsimageio.writers.rst","contributing.rst","index.rst","installation.rst","modules.rst"],objects:{"":{aicsimageio:[0,0,0,"-"]},"aicsimageio.aics_image":{AICSImage:[0,1,1,""],imread:[0,4,1,""]},"aicsimageio.aics_image.AICSImage":{SUPPORTED_READERS:[0,2,1,""],close:[0,3,1,""],data:[0,3,1,""],determine_reader:[0,3,1,""],get_channel_names:[0,3,1,""],get_image_data:[0,3,1,""],metadata:[0,3,1,""],reader:[0,3,1,""],size:[0,3,1,""],size_c:[0,3,1,""],size_s:[0,3,1,""],size_t:[0,3,1,""],size_x:[0,3,1,""],size_y:[0,3,1,""],size_z:[0,3,1,""]},"aicsimageio.buffer_reader":{BufferReader:[0,1,1,""]},"aicsimageio.buffer_reader.BufferReader":{INTEL_ENDIAN:[0,2,1,""],MOTOROLA_ENDIAN:[0,2,1,""],read_bytes:[0,3,1,""],read_uint16:[0,3,1,""],read_uint32:[0,3,1,""],read_uint64:[0,3,1,""],reset:[0,3,1,""]},"aicsimageio.exceptions":{ConflictingArgumentsError:[0,5,1,""],InvalidDimensionOrderingError:[0,5,1,""],MultiSceneCziException:[0,5,1,""],UnsupportedFileFormatError:[0,5,1,""]},"aicsimageio.readers":{czi_reader:[1,0,0,"-"],default_reader:[1,0,0,"-"],ndarray_reader:[1,0,0,"-"],ome_tiff_reader:[1,0,0,"-"],reader:[1,0,0,"-"],tiff_reader:[1,0,0,"-"]},"aicsimageio.readers.czi_reader":{CziReader:[1,1,1,""]},"aicsimageio.readers.czi_reader.CziReader":{ZEISS_10BYTE:[1,2,1,""],ZEISS_2BYTE:[1,2,1,""],close:[1,3,1,""],data:[1,3,1,""],dims:[1,3,1,""],dtype:[1,3,1,""],get_channel_names:[1,3,1,""],get_physical_pixel_size:[1,3,1,""],metadata:[1,3,1,""],size_c:[1,3,1,""],size_s:[1,3,1,""],size_t:[1,3,1,""],size_x:[1,3,1,""],size_y:[1,3,1,""],size_z:[1,3,1,""]},"aicsimageio.readers.default_reader":{DefaultReader:[1,1,1,""]},"aicsimageio.readers.default_reader.DefaultReader":{data:[1,3,1,""],dims:[1,3,1,""],metadata:[1,3,1,""]},"aicsimageio.readers.ndarray_reader":{NdArrayReader:[1,1,1,""]},"aicsimageio.readers.ndarray_reader.NdArrayReader":{close:[1,3,1,""],data:[1,3,1,""],dims:[1,3,1,""],metadata:[1,3,1,""]},"aicsimageio.readers.ome_tiff_reader":{OmeTiffReader:[1,1,1,""]},"aicsimageio.readers.ome_tiff_reader.OmeTiffReader":{data:[1,3,1,""],dims:[1,3,1,""],dtype:[1,3,1,""],get_channel_names:[1,3,1,""],get_physical_pixel_size:[1,3,1,""],is_ome:[1,3,1,""],load_slice:[1,3,1,""],metadata:[1,3,1,""],size_c:[1,3,1,""],size_t:[1,3,1,""],size_x:[1,3,1,""],size_y:[1,3,1,""],size_z:[1,3,1,""]},"aicsimageio.readers.reader":{Reader:[1,1,1,""]},"aicsimageio.readers.reader.Reader":{close:[1,3,1,""],convert_to_buffer:[1,3,1,""],data:[1,3,1,""],dims:[1,3,1,""],guess_dim_order:[1,3,1,""],is_this_type:[1,3,1,""],load:[1,3,1,""],metadata:[1,3,1,""]},"aicsimageio.readers.tiff_reader":{TiffReader:[1,1,1,""]},"aicsimageio.readers.tiff_reader.TiffReader":{close:[1,3,1,""],data:[1,3,1,""],dims:[1,3,1,""],dtype:[1,3,1,""],get_image_description:[1,3,1,""],metadata:[1,3,1,""]},"aicsimageio.transforms":{reshape_data:[0,4,1,""],transpose_to_dims:[0,4,1,""]},"aicsimageio.types":{LoadResults:[0,1,1,""]},"aicsimageio.types.LoadResults":{data:[0,3,1,""],dims:[0,3,1,""],metadata:[0,3,1,""]},"aicsimageio.vendor":{czifile:[2,0,0,"-"],omexml:[2,0,0,"-"]},"aicsimageio.vendor.czifile":{CziFile:[2,1,1,""],imread:[2,4,1,""]},"aicsimageio.vendor.czifile.CziFile":{asarray:[2,3,1,""],attachment_directory:[2,2,1,""],attachments:[2,3,1,""],axes:[2,2,1,""],close:[2,3,1,""],dtype:[2,2,1,""],filtered_subblock_directory:[2,2,1,""],metadata:[2,2,1,""],save_attachments:[2,3,1,""],segments:[2,3,1,""],shape:[2,2,1,""],start:[2,2,1,""],subblock_directory:[2,2,1,""],subblocks:[2,3,1,""]},"aicsimageio.vendor.omexml":{DO_XYTZC:[2,6,1,""],MPI_CMYK:[2,6,1,""],OMEXML:[2,1,1,""],OM_ARTIST:[2,6,1,""],OM_BITS_PER_SAMPLE:[2,6,1,""],OM_CELL_LENGTH:[2,6,1,""],OM_CELL_WIDTH:[2,6,1,""],OM_DATE_TIME:[2,6,1,""],OM_DOCUMENT_NAME:[2,6,1,""],OM_FILL_ORDER:[2,6,1,""],OM_FREE_BYTECOUNTS:[2,6,1,""],OM_FREE_OFFSETS:[2,6,1,""],OM_GRAY_RESPONSE_CURVE:[2,6,1,""],OM_GRAY_RESPONSE_UNIT:[2,6,1,""],OM_HOST_COMPUTER:[2,6,1,""],OM_IMAGE_LENGTH:[2,6,1,""],OM_IMAGE_WIDTH:[2,6,1,""],OM_INK_SET:[2,6,1,""],OM_MAKE:[2,6,1,""],OM_MAX_SAMPLE_VALUE:[2,6,1,""],OM_MIN_SAMPLE_VALUE:[2,6,1,""],OM_MODEL:[2,6,1,""],OM_NEW_SUBFILE_TYPE:[2,6,1,""],OM_ORIENTATION:[2,6,1,""],OM_PAGE_NUMBER:[2,6,1,""],OM_PREDICTOR:[2,6,1,""],OM_RESOLUTION_UNIT:[2,6,1,""],OM_SAMPLES_PER_PIXEL:[2,6,1,""],OM_SOFTWARE:[2,6,1,""],OM_T4_OPTIONS:[2,6,1,""],OM_T6_OPTIONS:[2,6,1,""],OM_THRESHHOLDING:[2,6,1,""],OM_TILE_BYTE_COUNT:[2,6,1,""],OM_TILE_LENGTH:[2,6,1,""],OM_TILE_OFFSETS:[2,6,1,""],OM_TILE_WIDTH:[2,6,1,""],OM_TRANSFER_FUNCTION:[2,6,1,""],OM_WHITE_POINT:[2,6,1,""],OM_X_POSITION:[2,6,1,""],OM_X_RESOLUTION:[2,6,1,""],OM_Y_POSITION:[2,6,1,""],OM_Y_RESOLUTION:[2,6,1,""],PC_PLANAR:[2,6,1,""],PI_CFA_ARRAY:[2,6,1,""],get_float_attr:[2,4,1,""],get_int_attr:[2,4,1,""],get_namespaces:[2,4,1,""],get_pixel_type:[2,4,1,""],get_text:[2,4,1,""],make_text_node:[2,4,1,""],page_name_original_metadata:[2,4,1,""],qn:[2,4,1,""],set_text:[2,4,1,""],split_qn:[2,4,1,""],xsd_now:[2,4,1,""]},"aicsimageio.vendor.omexml.OMEXML":{Channel:[2,1,1,""],Image:[2,1,1,""],OriginalMetadata:[2,1,1,""],Pixels:[2,1,1,""],Plane:[2,1,1,""],Plate:[2,1,1,""],PlatesDucktype:[2,1,1,""],StructuredAnnotations:[2,1,1,""],TiffData:[2,1,1,""],Well:[2,1,1,""],WellSample:[2,1,1,""],WellSampleDucktype:[2,1,1,""],WellsDucktype:[2,1,1,""],get_image_count:[2,3,1,""],get_ns:[2,3,1,""],image:[2,3,1,""],image_count:[2,3,1,""],plates:[2,3,1,""],root_node:[2,3,1,""],set_image_count:[2,3,1,""],structured_annotations:[2,3,1,""],to_xml:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Channel":{Color:[2,3,1,""],ID:[2,3,1,""],Name:[2,3,1,""],SamplesPerPixel:[2,3,1,""],get_Color:[2,3,1,""],get_ID:[2,3,1,""],get_Name:[2,3,1,""],get_SamplesPerPixel:[2,3,1,""],set_Color:[2,3,1,""],set_ID:[2,3,1,""],set_Name:[2,3,1,""],set_SamplesPerPixel:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Image":{AcquisitionDate:[2,3,1,""],ID:[2,3,1,""],Name:[2,3,1,""],Pixels:[2,3,1,""],get_AcquisitionDate:[2,3,1,""],get_ID:[2,3,1,""],get_Name:[2,3,1,""],set_AcquisitionDate:[2,3,1,""],set_ID:[2,3,1,""],set_Name:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.OriginalMetadata":{has_key:[2,3,1,""],iteritems:[2,3,1,""],keys:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Pixels":{Channel:[2,3,1,""],DimensionOrder:[2,3,1,""],ID:[2,3,1,""],PhysicalSizeX:[2,3,1,""],PhysicalSizeY:[2,3,1,""],PhysicalSizeZ:[2,3,1,""],PixelType:[2,3,1,""],Plane:[2,3,1,""],SizeC:[2,3,1,""],SizeT:[2,3,1,""],SizeX:[2,3,1,""],SizeY:[2,3,1,""],SizeZ:[2,3,1,""],TiffData:[2,3,1,""],append_channel:[2,3,1,""],channel_count:[2,3,1,""],get_DimensionOrder:[2,3,1,""],get_ID:[2,3,1,""],get_PhysicalSizeX:[2,3,1,""],get_PhysicalSizeY:[2,3,1,""],get_PhysicalSizeZ:[2,3,1,""],get_PixelType:[2,3,1,""],get_SizeC:[2,3,1,""],get_SizeT:[2,3,1,""],get_SizeX:[2,3,1,""],get_SizeY:[2,3,1,""],get_SizeZ:[2,3,1,""],get_channel_count:[2,3,1,""],get_channel_names:[2,3,1,""],get_plane_count:[2,3,1,""],get_planes_of_channel:[2,3,1,""],plane_count:[2,3,1,""],populate_TiffData:[2,3,1,""],remove_channel:[2,3,1,""],set_DimensionOrder:[2,3,1,""],set_ID:[2,3,1,""],set_PhysicalSizeX:[2,3,1,""],set_PhysicalSizeY:[2,3,1,""],set_PhysicalSizeZ:[2,3,1,""],set_PixelType:[2,3,1,""],set_SizeC:[2,3,1,""],set_SizeT:[2,3,1,""],set_SizeX:[2,3,1,""],set_SizeY:[2,3,1,""],set_SizeZ:[2,3,1,""],set_channel_count:[2,3,1,""],set_plane_count:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Plane":{DeltaT:[2,3,1,""],ExposureTime:[2,3,1,""],PositionX:[2,3,1,""],PositionY:[2,3,1,""],PositionZ:[2,3,1,""],TheC:[2,3,1,""],TheT:[2,3,1,""],TheZ:[2,3,1,""],get_DeltaT:[2,3,1,""],get_PositionX:[2,3,1,""],get_PositionY:[2,3,1,""],get_PositionZ:[2,3,1,""],get_TheC:[2,3,1,""],get_TheT:[2,3,1,""],get_TheZ:[2,3,1,""],set_DeltaT:[2,3,1,""],set_PositionX:[2,3,1,""],set_PositionY:[2,3,1,""],set_PositionZ:[2,3,1,""],set_TheC:[2,3,1,""],set_TheT:[2,3,1,""],set_TheZ:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Plate":{ColumnNamingConvention:[2,3,1,""],Columns:[2,3,1,""],Description:[2,3,1,""],ExternalIdentifier:[2,3,1,""],ID:[2,3,1,""],Name:[2,3,1,""],RowNamingConvention:[2,3,1,""],Rows:[2,3,1,""],Status:[2,3,1,""],Well:[2,3,1,""],WellOriginX:[2,3,1,""],WellOriginY:[2,3,1,""],get_ColumnNamingConvention:[2,3,1,""],get_Columns:[2,3,1,""],get_Description:[2,3,1,""],get_ExternalIdentifier:[2,3,1,""],get_ID:[2,3,1,""],get_Name:[2,3,1,""],get_RowNamingConvention:[2,3,1,""],get_Rows:[2,3,1,""],get_Status:[2,3,1,""],get_Well:[2,3,1,""],get_WellOriginX:[2,3,1,""],get_WellOriginY:[2,3,1,""],get_well_name:[2,3,1,""],set_ColumnNamingConvention:[2,3,1,""],set_Columns:[2,3,1,""],set_Description:[2,3,1,""],set_ExternalIdentifier:[2,3,1,""],set_ID:[2,3,1,""],set_Name:[2,3,1,""],set_RowNamingConvention:[2,3,1,""],set_Rows:[2,3,1,""],set_Status:[2,3,1,""],set_WellOriginX:[2,3,1,""],set_WellOriginY:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.PlatesDucktype":{newPlate:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.StructuredAnnotations":{OriginalMetadata:[2,3,1,""],add_original_metadata:[2,3,1,""],get_original_metadata_refs:[2,3,1,""],get_original_metadata_value:[2,3,1,""],has_key:[2,3,1,""],has_original_metadata:[2,3,1,""],iter_original_metadata:[2,3,1,""],keys:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.TiffData":{FirstC:[2,3,1,""],FirstT:[2,3,1,""],FirstZ:[2,3,1,""],IFD:[2,3,1,""],PlaneCount:[2,3,1,""],get_FirstC:[2,3,1,""],get_FirstT:[2,3,1,""],get_FirstZ:[2,3,1,""],get_IFD:[2,3,1,""],get_PlaneCount:[2,3,1,""],set_FirstC:[2,3,1,""],set_FirstT:[2,3,1,""],set_FirstZ:[2,3,1,""],set_IFD:[2,3,1,""],set_PlaneCount:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.Well":{Column:[2,3,1,""],ExternalDescription:[2,3,1,""],ExternalIdentifier:[2,3,1,""],ID:[2,3,1,""],Row:[2,3,1,""],Sample:[2,3,1,""],get_Color:[2,3,1,""],get_Column:[2,3,1,""],get_ExternalDescription:[2,3,1,""],get_ExternalIdentifier:[2,3,1,""],get_ID:[2,3,1,""],get_Row:[2,3,1,""],get_Sample:[2,3,1,""],set_Color:[2,3,1,""],set_Column:[2,3,1,""],set_ExternalDescription:[2,3,1,""],set_ExternalIdentifier:[2,3,1,""],set_ID:[2,3,1,""],set_Row:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellSample":{ID:[2,3,1,""],ImageRef:[2,3,1,""],Index:[2,3,1,""],PositionX:[2,3,1,""],PositionY:[2,3,1,""],Timepoint:[2,3,1,""],get_ID:[2,3,1,""],get_ImageRef:[2,3,1,""],get_Index:[2,3,1,""],get_PositionX:[2,3,1,""],get_PositionY:[2,3,1,""],get_Timepoint:[2,3,1,""],set_ID:[2,3,1,""],set_ImageRef:[2,3,1,""],set_Index:[2,3,1,""],set_PositionX:[2,3,1,""],set_PositionY:[2,3,1,""],set_Timepoint:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellSampleDucktype":{"new":[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellsDucktype":{"new":[2,3,1,""]},"aicsimageio.writers":{ome_tiff_writer:[3,0,0,"-"],png_writer:[3,0,0,"-"],writer:[3,0,0,"-"]},"aicsimageio.writers.ome_tiff_writer":{OmeTiffWriter:[3,1,1,""]},"aicsimageio.writers.ome_tiff_writer.OmeTiffWriter":{close:[3,3,1,""],save:[3,3,1,""],save_slice:[3,3,1,""],set_metadata:[3,3,1,""],size_c:[3,3,1,""],size_t:[3,3,1,""],size_x:[3,3,1,""],size_y:[3,3,1,""],size_z:[3,3,1,""]},"aicsimageio.writers.png_writer":{PngWriter:[3,1,1,""]},"aicsimageio.writers.png_writer.PngWriter":{close:[3,3,1,""],save:[3,3,1,""],save_slice:[3,3,1,""]},"aicsimageio.writers.writer":{Writer:[3,1,1,""]},"aicsimageio.writers.writer.Writer":{close:[3,3,1,""],save:[3,3,1,""]},aicsimageio:{aics_image:[0,0,0,"-"],buffer_reader:[0,0,0,"-"],constants:[0,0,0,"-"],exceptions:[0,0,0,"-"],readers:[1,0,0,"-"],transforms:[0,0,0,"-"],types:[0,0,0,"-"],vendor:[2,0,0,"-"],writers:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:exception","6":"py:data"},terms:{"016ee933cd53":2,"11th":0,"14th":2,"22fa":2,"2nd":0,"44d4":2,"4d3e":2,"4ed9":2,"79ed4f08":2,"875c":2,"8efb":2,"8f8ca63d1a54":2,"97de":2,"993986cd":2,"abstract":[1,3],"boolean":0,"byte":[0,1,2,5],"case":1,"catch":1,"class":[0,1,2,3],"default":[0,2,3],"float":[1,2],"function":[0,1,2,3],"import":5,"int":[0,1,2],"new":[0,2],"public":6,"return":[0,1,2,3,5],"short":4,"static":[0,1],"throw":3,"true":[0,2,3],For:[0,1,2,5],IDs:2,OME:[0,1,2,3,5],Ome:0,The:[0,1,2,3,5,6],Then:4,There:[2,3],These:2,Use:2,Will:3,_czifl:2,a08:2,abc:[1,3],abl:0,about:1,abov:5,absolut:0,access:[0,2],accompani:3,acquir:2,acquisit:2,acquisitiond:2,across:0,action:3,actual:2,add:[0,2,4],add_original_metadata:2,added:0,addit:5,after:0,agreement:2,aics_imag:7,aicsimag:[0,5],aicsimageio:[4,6],alia:0,all:[1,2,4],allencellmodel:[5,6],allow:[1,3],alreadi:3,also:[4,5],alwai:[1,2,4,5,6],anaconda:4,ani:[1,2,5],annot:2,api:2,appear:2,append_channel:2,applic:2,appreci:4,arbitrari:[0,3],arduou:2,arg:2,argument:[0,2],around:1,arr:1,arrai:[1,2,3,5],artist:2,asarrai:2,assign:0,assum:[0,1,2,3],assumpt:1,attach:2,attachment_directori:2,attempt:[0,2],attribut:[2,5],author:2,automat:[0,2],axes:2,axi:1,b03:2,b6c1:2,back:[0,1,2],backend:[0,1],backward:2,base:[0,1,2,3],becaus:1,begin:2,being:[0,1,3],below:[0,5],best:5,between:[2,3],bgr2rgb:2,bgr:2,binari:2,bio:5,bioformat:2,bit:[2,4],bitspersampl:2,bland:2,blank:0,block:5,blue:2,bool:[0,1,2],branch:4,bsd:5,buffer:[0,1,2,5],buffer_read:7,bufferediobas:[0,1],bufferread:0,bugfix:4,build:4,bumpvers:4,bytearrai:1,bytestr:2,bytestream:0,c5b4499c5455:2,california:2,call:2,caller:2,can:[0,1,2,3,4,5,6],cannot:0,carl:2,cast:2,cbcd:2,celllength:2,cellprofil:2,cellwidth:2,chang:[2,4],channel:[0,1,2,3,5],channel_color:3,channel_count:2,channel_nam:3,cheapli:0,check:[0,4],checkout:4,child:0,christoph:2,classmethod:1,claus:5,cleanup:1,clone:[4,6],close:[0,1,2,3,5],cmyk:2,code:[2,5],collect:[0,2],color:[2,3],column:2,columnnamingconvent:2,com:[2,4,5,6],command:6,commit:4,commun:0,compar:2,compat:2,compon:2,comput:2,confidenti:2,conflict:0,conflictingargumentserror:0,consist:0,constant:[2,7],construct:3,constructor:[0,2],contain:[0,2,5],content:7,context:[0,2],contribut:5,convent:2,convert:[2,3],convert_to_buff:1,copi:[0,2,6],core:[1,2],count:2,cpu:2,cpython:2,creat:[0,1,2,4],creation:3,credit:4,cube:0,curl:6,current:[0,2,5],cyx:[0,3],czi:[0,1,2,3,5],czi_read:[0,7],czifil:[0,7],czifl:2,cziread:[0,1,3],czyx:0,daca46f16346:2,data:[0,1,2,3,5],datatyp:2,date:2,datetim:2,deal:0,decod:2,default_dim:0,default_read:[0,7],defaultread:[0,1],delta:2,deltat:2,depend:[1,5],depth:[0,2],deriv:2,derivedwrit:3,descript:[0,1,2,4],design:2,desir:0,detail:[1,4],detectmosa:2,determine_read:0,dev:4,develop:[2,4],dict:2,dictionari:2,dictionary_index:2,differ:[1,5],dim:[0,1,3],dimens:[0,1,2,3,5],dimension:[0,2,5],dimension_ord:3,dimensionord:2,direct:2,directli:[0,2],directori:2,disk:2,do_:2,do_xytzc:2,do_xyzct:2,doc:2,document:[1,2],doe:[2,3],doesn:[0,2,3],dom:2,don:[2,6],done:[4,5],download:[2,6],ds_zisraw:2,dtype:[1,2],duck:1,ducktyp:2,durat:2,dynam:2,each:[0,2,3,5],easi:2,edit:4,ef8af211:2,either:[2,6],element:[1,2],elementtre:2,embed:2,empti:0,en_u:2,enabl:1,encod:2,end:[0,1],enough:0,environ:4,error:2,etc:[0,1],etre:[0,2],ever:1,everi:4,exactli:3,exampl:[0,1,2,3],except:[1,7],exist:[2,3],experi:2,explor:2,exposur:2,exposuretim:2,extend:0,extens:[0,2],extent:2,externaldescript:2,externalidentifi:2,extra:[0,1],f7515566:2,fals:[0,3],featur:4,few:2,field:0,file2:3,file3:3,file:[0,1,2,3,4,5],file_or_buff:5,file_path:3,fileformat:2,fileheaderseg:2,filelik:1,filenam:[0,1,2],files:2,fill:0,fillord:2,filter:2,filtered_subblock_directori:2,first:[1,2],firstc:2,firstt:2,firstz:2,flag:3,fluoresc:2,fork:4,format:[2,3,5],found:[2,4],four:2,fourth:0,frame:1,free:5,freebytecount:2,freeoffset:2,from:[0,1,2,5],full:[3,5],gener:[0,1,2],get:[0,1,2],get_acquisitiond:2,get_channel_count:2,get_channel_nam:[0,1,2],get_color:2,get_column:2,get_columnnamingconvent:2,get_deltat:2,get_descript:2,get_dimensionord:2,get_externaldescript:2,get_externalidentifi:2,get_firstc:2,get_firstt:2,get_firstz:2,get_float_attr:2,get_id:2,get_ifd:2,get_image_count:2,get_image_data:[0,5],get_image_descript:1,get_imageref:2,get_index:2,get_int_attr:2,get_n:2,get_nam:2,get_namespac:2,get_original_metadata_ref:2,get_original_metadata_valu:2,get_physical_pixel_s:1,get_physicalsizei:2,get_physicalsizex:2,get_physicalsizez:2,get_pixel_typ:2,get_pixeltyp:2,get_plane_count:2,get_planecount:2,get_planes_of_channel:2,get_positioni:2,get_positionx:2,get_positionz:2,get_row:2,get_rownamingconvent:2,get_sampl:2,get_samplesperpixel:2,get_sizec:2,get_sizei:2,get_sizet:2,get_sizex:2,get_sizez:2,get_statu:2,get_text:2,get_thec:2,get_thet:2,get_thez:2,get_timepoint:2,get_wel:2,get_well_nam:2,get_wellorigini:2,get_welloriginx:2,gif:[0,1],git:[2,4,5,6],github:[4,5,6],given:[0,2,4],given_dim:0,global:2,gmbh:2,gohlk:2,grayresponsecurv:2,grayresponseunit:2,greatli:4,green:2,guess:0,guess_dim_ord:1,guid:[2,6],half:2,handl:[0,1,2,4,5],has:[0,2],has_kei:2,has_original_metadata:2,have:[0,2,6],head:5,header:2,heavi:5,help:4,here:4,higher:1,hold:2,hook:2,hostcomput:2,how:[1,2,4,5],howev:1,html:2,http:[2,5,6],ids:2,ifd:2,imag:[0,1,2,3,5],image0:3,image2:3,image_count:2,image_nam:3,imageio:[1,5],imagelength:2,imageref:2,imagewidth:2,img40_1:2,img:0,immedi:0,implement:[2,5],imread:[0,1,2,5],includ:[2,4],incompat:2,indent:2,index:[0,2,3,5],indic:2,infer:2,inform:5,initi:[0,2,3],inkset:2,input:0,insert:[2,3],insid:3,inspect:2,instal:4,instanc:[0,2],instanti:5,intel_endian:0,intend:[0,1],intent:0,interact:5,interfac:[0,1,2,3],interleav:2,intern:2,interpol:2,interpret:2,invaliddimensionorderingerror:0,invok:2,ioerror:3,irvin:2,is_om:1,is_this_typ:1,isn:0,iso:2,item:2,iter:2,iter_original_metadata:2,iteritem:2,its:[1,2],jpegxr:2,jpegxrfil:2,jpg:1,jpgfile:2,just:1,kei:2,kind:2,know:0,known:[0,5],known_dim:[0,5],kwarg:[0,1,2,3],laboratori:2,larg:1,lazi:[0,1],least:2,left:0,less:2,let:2,letter:[0,2],level:[1,2],librari:[0,1,2,5],licenc:2,like:[1,2],lint:4,list:[0,1,2],littl:4,load:[0,1,3],load_slic:1,loadresult:[0,1],local:4,locat:[2,3],look:2,made:2,mai:5,main:2,maintain:4,major:4,make:[1,2,3,4],make_text_nod:2,mani:2,map:2,mappabl:2,master:[2,6],match:[0,2],max:2,max_work:[0,1,2],maximum:2,maxsamplevalu:2,mean:0,meant:1,mechan:2,memmap:2,memori:[1,2],merg:4,messag:0,metadata:[0,1,2,3,5],method:[2,6],microscop:2,microscopi:[0,2],might:2,mimread:1,min:2,minor:4,minsamplevalu:2,miss:0,mode:4,model:2,modif:2,modifi:[0,2],modul:[5,7],more:[0,1],mosaic:2,most:[2,6],motorola_endian:0,mpi_cmyk:2,multi:[0,2],multidimension:2,multifil:2,multipl:0,multiscenecziexcept:0,must:[0,2],myimag:2,mymetadata:3,n_byte:0,name:[0,2,3],namespac:2,nativ:[1,2],ndarrai:[0,1,2,3],ndarray_read:[0,7],ndarrayread:1,nearest:2,necessari:3,need:[0,1,2,3],neighbor:2,newlin:2,newplat:2,newsubfiletyp:2,node:2,none:[0,1,2,3],note:[0,1,2],noth:3,now:4,npdtype:2,number:[0,1,2],numpi:[0,1,2,3,5],object:[0,1,2,3,5],obtain:5,off:1,often:2,om_:2,om_artist:2,om_bits_per_sampl:2,om_cell_length:2,om_cell_width:2,om_date_tim:2,om_document_nam:2,om_fill_ord:2,om_free_bytecount:2,om_free_offset:2,om_gray_response_curv:2,om_gray_response_unit:2,om_host_comput:2,om_image_length:2,om_image_width:2,om_ink_set:2,om_mak:2,om_max_sample_valu:2,om_min_sample_valu:2,om_model:2,om_new_subfile_typ:2,om_orient:2,om_page_numb:2,om_photometric_interpret:2,om_predictor:2,om_resolution_unit:2,om_samples_per_pixel:2,om_softwar:2,om_t4_opt:2,om_t6_opt:2,om_threshhold:2,om_tile_byte_count:2,om_tile_length:2,om_tile_offset:2,om_tile_width:2,om_transfer_funct:2,om_white_point:2,om_x_posit:2,om_x_resolut:2,om_y_posit:2,om_y_resolut:2,ome:[0,2,3,5],ome_metadata:3,ome_tiff_read:[0,7],ome_tiff_writ:[0,7],ome_xml:3,omemetadata:2,ometif:0,ometiffread:[0,1],ometiffwrit:3,omexml:[0,7],onc:[4,6],one:[0,1,2],ones:1,onli:[0,2,5],open:[0,1,2,3],openmicroscopi:2,option:[0,1,2],order:[0,1,2,3,5],org:2,organ:2,orient:2,origin:[2,4],originalmetadata:2,orphan:2,other:[0,2,3,4],our:2,out:[2,3],out_orient:[0,5],output:[2,3],over:[2,3],overrid:0,overwrit:3,overwrite_fil:3,packag:[5,7],pad:0,page:[2,5],page_name_original_metadata:2,pagenumb:2,pair:2,param:3,paramet:[0,1,2,3],parent:2,pars:[0,2],parser:5,particular:2,pass:[0,3,4],patch:4,path:[0,1,3,5],pathlib:[0,1,3],pattern:3,pc_planar:2,pdf:2,per:2,perform:[1,3],permit:2,photometr:2,physic:[2,3],physicalsizei:2,physicalsizex:2,physicalsizez:2,pi_cfa_arrai:2,pip:[4,5,6],pixel:[1,2,3],pixels_physical_s:3,pixeltyp:2,planar:2,plane:[1,2],plane_count:2,planecount:2,plate:2,plate_id:2,platesducktyp:2,pleas:[1,5],png:[0,3],png_writer:[0,7],pngwriter:3,point:[2,3],populate_tiffdata:2,posit:2,positioni:2,positionx:2,positionz:2,possibl:4,pragmat:2,predictor:2,prefer:6,prepar:5,present:[0,1,2],print:2,process:[1,6],product:2,programat:2,project:4,prone:2,proper:3,properli:3,properti:[0,1,2,5],provid:[0,2],prune:0,pt_:2,pt_uint8:2,pull:4,pure:0,purpos:2,push:4,put:[0,3],pypi:4,python:[2,4,5,6],pyx:2,qualifi:2,rais:2,rapidli:2,raw:0,read:[0,1,2,4,5],read_byt:0,read_descript:0,read_uint16:0,read_uint32:0,read_uint64:0,reader:[0,3,5,7],readi:4,realli:1,recent:6,recogn:0,recommend:4,reconstruct:2,red:2,refer:[0,1,2],rel:2,relat:5,releas:[2,5],remind:4,remov:[0,1,2],remove_channel:2,reorder:0,replac:2,repo:[4,6],repositori:6,repres:[0,2,5],represent:2,request:[0,2,4,5],requir:0,reset:0,reshap:0,reshape_data:0,resiz:2,resolutionunit:2,resolv:4,retriev:[0,1,2],return_dim:0,revis:[0,5],rgb:[1,2,3],rgba:1,right:0,root:2,root_nod:2,rootnod:2,row:2,rownamingconvent:2,rtype:1,run:[1,4,6],safeti:1,same:[0,3,5],sampl:2,samplesperpixel:2,save:[2,3],save_attach:2,save_slic:3,scene:[0,1,5],schema:2,scipi:2,scope:0,search:[2,5],second:2,see:[0,2,5],segment:2,segment_id:2,sequenc:2,seri:2,set:[0,2,4],set_acquisitiond:2,set_channel_count:2,set_color:2,set_column:2,set_columnnamingconvent:2,set_deltat:2,set_descript:2,set_dimensionord:2,set_externaldescript:2,set_externalidentifi:2,set_firstc:2,set_firstt:2,set_firstz:2,set_id:2,set_ifd:2,set_image_count:2,set_imageref:2,set_index:2,set_metadata:3,set_nam:2,set_physicalsizei:2,set_physicalsizex:2,set_physicalsizez:2,set_pixeltyp:2,set_plane_count:2,set_planecount:2,set_positioni:2,set_positionx:2,set_positionz:2,set_row:2,set_rownamingconvent:2,set_samplesperpixel:2,set_sizec:2,set_sizei:2,set_sizet:2,set_sizex:2,set_sizez:2,set_statu:2,set_text:2,set_thec:2,set_thet:2,set_thez:2,set_timepoint:2,set_wellorigini:2,set_welloriginx:2,setup:6,shape:[0,1,2,5],should:[0,1,2,3,5],shuffl:0,silent:3,similarli:0,simpli:[0,1],sinc:2,singl:1,site:2,six:5,size:[0,2,3,5],size_:[0,1],size_c:[0,1,3],size_i:[0,1,3],size_t:[0,1,3],size_x:[0,1,3],size_z:[0,1,3,5],sizec:2,sizei:2,sizet:2,sizex:2,sizez:2,slice:[0,1,3],slice_index:1,softwar:[2,5],some:[2,3],sort:3,sourc:[0,1,2,3],specif:[0,1,2,5],specifi:[0,2,3,5],spline:2,split:2,split_qn:2,spw:2,src:2,stabl:[2,4,5],stack:1,stack_count:2,stage:2,standard:0,start:2,statement:2,statu:2,stczyx:[0,3,5],step:1,store:[1,2,5],str:[0,1,2,3],stream:1,string:[0,1,2],structur:2,structured_annot:2,structuredannot:2,stzcyx:3,sub:2,subblock:2,subblock_directori:2,submit:4,submodul:7,subpackag:7,subset:[2,5],suit:5,supersampl:2,suppli:2,support:[0,2,5],supported_read:0,sure:4,syx:5,t4option:2,t6option:2,tag:[2,4],tag_nam:2,take:[0,3],tarbal:6,tcx:0,tcximag:0,tczyx:0,tell:1,termin:6,test:[2,4],text:2,than:[1,2],thec:2,thei:[0,4],them:[0,2,3],thereof:2,thet:2,thez:2,thi:[0,1,2,3,5,6],thing:2,those:1,thread:[0,2],three:2,threshhold:2,through:[0,4,6],thrown:0,tie:2,tif:[0,2,3],tiff:[0,1,2,4,5],tiff_read:[0,7],tiffdata:2,tifffil:2,tiffread:[0,1],tile:2,tilebytecount:2,tilelength:2,tileoffset:2,tilewidth:2,time:[1,2,5],timepoint:2,timepoint_count:2,to_xml:2,todo:3,top:2,transferfunct:2,transform:7,transpos:5,transpose_to_dim:0,tree:1,tupl:[0,1,5],two:[2,3,5],type:[1,2,7],type_:0,typic:2,tzcyx:1,uint16:1,uint8:[1,2],unabl:2,under:5,unicod:2,unifi:[0,1],union:[0,1,3],unit:2,univers:2,unsupportedfileformaterror:0,upstream:1,urn:2,use:[0,1,2,3,5],used:[0,1,2],user:0,uses:1,using:[1,2],utf:2,uuid:2,valid:0,valu:[0,2,3],valueerror:2,vari:[0,2],variabl:2,vbtcxzy:0,vendor:[0,7],version:[2,4,5],via:[0,2,5],view:[0,2],virtualenv:4,visit:5,volread:1,wai:[2,5],warn:0,websit:4,welcom:4,well:2,well_id:2,well_nod:2,wellorigini:2,welloriginx:2,wellsampl:2,wellsample_id:2,wellsampleducktyp:2,wellsducktyp:2,when:[0,1,2,4,5],where:[1,2],which:[0,1,2],whichev:5,whitepoint:2,whose:2,window:2,within:2,without:0,work:[0,4],worker:0,would:0,wrap:2,wrapper:1,writabl:2,write2:3,write:[2,3,5],writer2:3,writer:[0,7],written:3,www:2,xml:[0,1,2,3],xposit:2,xresolut:2,xsd:2,xsd_now:2,xytzc:2,yet:2,you:[0,1,2,4,5,6],your:[4,5,6],your_development_typ:4,your_name_her:4,yourself:2,yposit:2,yresolut:2,yxc:1,zeiss:[0,2],zeiss_10byt:1,zeiss_2byt:1,zen:2,zero:[0,2],zisraw:2,zisrawfil:1,zstack_t10:0,zstack_t8:0,zyx:[0,1,5]},titles:["aicsimageio package","aicsimageio.readers package","aicsimageio.vendor package","aicsimageio.writers package","Contributing","Welcome to aicsimageio\u2019s documentation!","Installation","aicsimageio"],titleterms:{aics_imag:0,aicsimageio:[0,1,2,3,5,7],buffer_read:0,constant:0,content:[0,1,2,3],contribut:4,czi_read:1,czifil:2,default_read:1,deploi:4,develop:5,disclaim:5,document:5,except:0,featur:5,from:6,get:4,indic:5,instal:[5,6],modul:[0,1,2,3],ndarray_read:1,note:5,ome_tiff_read:1,ome_tiff_writ:3,omexml:2,packag:[0,1,2,3],png_writer:3,quick:5,reader:1,releas:6,requir:2,revis:2,sourc:6,stabl:6,start:[4,5],submodul:[0,1,2,3],subpackag:0,tabl:5,tiff_read:1,transform:0,type:0,vendor:2,welcom:5,writer:3}})