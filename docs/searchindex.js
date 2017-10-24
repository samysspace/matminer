Search.setIndex({docnames:["changelog","contributors","example_bulkmod","index","installation","matminer","matminer.data_retrieval","matminer.datasets","matminer.datasets.test_datasets","matminer.descriptors","matminer.featurizers","matminer.featurizers.data_files","matminer.figrecipes","matminer.figrecipes.matplotlib","matminer.figrecipes.matplotlib.examples","matminer.figrecipes.plotly","matminer.learners","matminer.learners.tests","matminer.models","modules"],envversion:53,filenames:["changelog.rst","contributors.rst","example_bulkmod.rst","index.rst","installation.rst","matminer.rst","matminer.data_retrieval.rst","matminer.datasets.rst","matminer.datasets.test_datasets.rst","matminer.descriptors.rst","matminer.featurizers.rst","matminer.featurizers.data_files.rst","matminer.figrecipes.rst","matminer.figrecipes.matplotlib.rst","matminer.figrecipes.matplotlib.examples.rst","matminer.figrecipes.plotly.rst","matminer.learners.rst","matminer.learners.tests.rst","matminer.models.rst","modules.rst"],objects:{"":{matminer:[5,0,0,"-"]},"matminer.data_retrieval":{retrieve_Citrine:[6,0,0,"-"],retrieve_MP:[6,0,0,"-"],retrieve_MongoDB:[6,0,0,"-"]},"matminer.data_retrieval.retrieve_Citrine":{CitrineDataRetrieval:[6,1,1,""]},"matminer.data_retrieval.retrieve_Citrine.CitrineDataRetrieval":{__init__:[6,2,1,""],get_dataframe:[6,2,1,""],get_value:[6,2,1,""],parse_matrix:[6,2,1,""],parse_scalars:[6,2,1,""],parse_vectors:[6,2,1,""]},"matminer.data_retrieval.retrieve_MP":{MPDataRetrieval:[6,1,1,""]},"matminer.data_retrieval.retrieve_MP.MPDataRetrieval":{__init__:[6,2,1,""],get_dataframe:[6,2,1,""]},"matminer.data_retrieval.retrieve_MongoDB":{MongoDataRetrieval:[6,1,1,""],clean_projection:[6,3,1,""],is_int:[6,3,1,""],remove_ints:[6,3,1,""]},"matminer.data_retrieval.retrieve_MongoDB.MongoDataRetrieval":{__init__:[6,2,1,""],get_dataframe:[6,2,1,""]},"matminer.datasets":{dataframe_loader:[7,0,0,"-"],test_datasets:[8,0,0,"-"]},"matminer.datasets.dataframe_loader":{load_dielectric_constant:[7,3,1,""],load_elastic_tensor:[7,3,1,""],load_piezoelectric_tensor:[7,3,1,""]},"matminer.datasets.test_datasets":{test_datasets:[8,0,0,"-"]},"matminer.datasets.test_datasets.test_datasets":{DataSetTest:[8,1,1,""]},"matminer.datasets.test_datasets.test_datasets.DataSetTest":{test_dielectric_tensor:[8,2,1,""],test_elastic_tensor:[8,2,1,""],test_piezoelectric_tensor:[8,2,1,""]},"matminer.featurizers":{bandstructure:[10,0,0,"-"],base:[10,0,0,"-"],composition:[10,0,0,"-"],data:[10,0,0,"-"],data_files:[11,0,0,"-"],site:[10,0,0,"-"],stats:[10,0,0,"-"],structure:[10,0,0,"-"]},"matminer.featurizers.bandstructure":{BandFeaturizer:[10,1,1,""],BranchPointEnergy:[10,1,1,""]},"matminer.featurizers.bandstructure.BandFeaturizer":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],get_bindex_bspin:[10,4,1,""],implementors:[10,2,1,""]},"matminer.featurizers.bandstructure.BranchPointEnergy":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.base":{BaseFeaturizer:[10,1,1,""]},"matminer.featurizers.base.BaseFeaturizer":{citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],featurize_dataframe:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition":{BandCenter:[10,1,1,""],CohesiveEnergy:[10,1,1,""],ElectronAffinity:[10,1,1,""],ElectronegativityDiff:[10,1,1,""],ElementFraction:[10,1,1,""],ElementProperty:[10,1,1,""],FERECorrection:[10,1,1,""],IonProperty:[10,1,1,""],Stoichiometry:[10,1,1,""],TMetalFraction:[10,1,1,""],ValenceOrbital:[10,1,1,""]},"matminer.featurizers.composition.BandCenter":{citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.CohesiveEnergy":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.ElectronAffinity":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.ElectronegativityDiff":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.ElementFraction":{__init__:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.ElementProperty":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],from_preset:[10,4,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.FERECorrection":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.IonProperty":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.Stoichiometry":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.TMetalFraction":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.composition.ValenceOrbital":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.data":{AbstractData:[10,1,1,""],PymatgenData:[10,1,1,""]},"matminer.featurizers.data.AbstractData":{get_property:[10,2,1,""]},"matminer.featurizers.data.PymatgenData":{get_composition_oxidation_state:[10,4,1,""],get_property:[10,2,1,""]},"matminer.featurizers.data_files":{deml_elementdata:[11,0,0,"-"]},"matminer.featurizers.site":{AGNIFingerprints:[10,1,1,""],OPSiteFingerprint:[10,1,1,""]},"matminer.featurizers.site.AGNIFingerprints":{__init__:[10,2,1,""],citations:[10,2,1,""],directions:[10,5,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.site.OPSiteFingerprint":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.stats":{PropertyStats:[10,1,1,""]},"matminer.featurizers.stats.PropertyStats":{avg_dev:[10,4,1,""],calc_stat:[10,4,1,""],eigenvalues:[10,4,1,""],flatten:[10,4,1,""],gaussian_kernel:[10,4,1,""],holder_mean:[10,4,1,""],laplacian_kernel:[10,4,1,""],maximum:[10,4,1,""],mean:[10,4,1,""],minimum:[10,4,1,""],mode:[10,4,1,""],n_numerical_modes:[10,4,1,""],range:[10,4,1,""],sorted:[10,4,1,""],std_dev:[10,4,1,""]},"matminer.featurizers.structure":{CoulombMatrix:[10,1,1,""],DensityFeatures:[10,1,1,""],ElectronicRadialDistributionFunction:[10,1,1,""],GlobalSymmetryFeatures:[10,1,1,""],MinimumRelativeDistances:[10,1,1,""],OPStructureFingerprint:[10,1,1,""],OrbitalFieldMatrix:[10,1,1,""],PartialRadialDistributionFunction:[10,1,1,""],RadialDistributionFunction:[10,1,1,""],RadialDistributionFunctionPeaks:[10,1,1,""],SineCoulombMatrix:[10,1,1,""],get_neighbors_of_site_with_index:[10,3,1,""],get_order_parameter_feature_vectors_difference:[10,3,1,""],get_order_parameter_stats:[10,3,1,""]},"matminer.featurizers.structure.CoulombMatrix":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.DensityFeatures":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.ElectronicRadialDistributionFunction":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.GlobalSymmetryFeatures":{__init__:[10,2,1,""],citations:[10,2,1,""],crystal_idx:[10,5,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.MinimumRelativeDistances":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.OPStructureFingerprint":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.OrbitalFieldMatrix":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],get_atom_ofms:[10,2,1,""],get_mean_ofm:[10,2,1,""],get_ohv:[10,2,1,""],get_single_ofm:[10,2,1,""],get_structure_ofm:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.PartialRadialDistributionFunction":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.RadialDistributionFunction":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.RadialDistributionFunctionPeaks":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.featurizers.structure.SineCoulombMatrix":{__init__:[10,2,1,""],citations:[10,2,1,""],feature_labels:[10,2,1,""],featurize:[10,2,1,""],implementors:[10,2,1,""]},"matminer.figrecipes":{matplotlib:[13,0,0,"-"],plotly:[15,0,0,"-"]},"matminer.figrecipes.matplotlib":{examples:[14,0,0,"-"],plots:[13,0,0,"-"]},"matminer.figrecipes.matplotlib.examples":{heatmap_examples:[14,0,0,"-"],xyscatter_examples:[14,0,0,"-"]},"matminer.figrecipes.matplotlib.examples.heatmap_examples":{heatmap_ex1:[14,3,1,""]},"matminer.figrecipes.matplotlib.examples.xyscatter_examples":{xyscatter_ex1:[14,3,1,""]},"matminer.figrecipes.matplotlib.plots":{HeatMapPlot:[13,1,1,""],XYPlot:[13,1,1,""]},"matminer.figrecipes.matplotlib.plots.HeatMapPlot":{__init__:[13,2,1,""],plot:[13,2,1,""]},"matminer.figrecipes.matplotlib.plots.XYPlot":{__init__:[13,2,1,""],plot:[13,2,1,""]},"matminer.figrecipes.plotly":{make_plots:[15,0,0,"-"]},"matminer.figrecipes.plotly.make_plots":{PlotlyFig:[15,1,1,""]},"matminer.figrecipes.plotly.make_plots.PlotlyFig":{__init__:[15,2,1,""],bar_chart:[15,2,1,""],create_plot:[15,2,1,""],heatmap_plot:[15,2,1,""],histogram:[15,2,1,""],scatter_matrix:[15,2,1,""],violin_plot:[15,2,1,""],xy_plot:[15,2,1,""]},"matminer.learners":{tests:[17,0,0,"-"],volume_predictor:[16,0,0,"-"]},"matminer.learners.tests":{test_volume_predictor:[17,0,0,"-"]},"matminer.learners.tests.test_volume_predictor":{ConditionalVolumePredictorTest:[17,1,1,""],VolumePredictorTest:[17,1,1,""]},"matminer.learners.tests.test_volume_predictor.ConditionalVolumePredictorTest":{test_predict:[17,2,1,""]},"matminer.learners.tests.test_volume_predictor.VolumePredictorTest":{test_CsCl:[17,2,1,""],test_CsCl_ionic:[17,2,1,""],test_Si:[17,2,1,""]},"matminer.learners.volume_predictor":{ConditionalVolumePredictor:[16,1,1,""],VolumePredictor:[16,1,1,""],is_ox:[16,3,1,""]},"matminer.learners.volume_predictor.ConditionalVolumePredictor":{__init__:[16,2,1,""],get_predicted_structure:[16,2,1,""],predict:[16,2,1,""]},"matminer.learners.volume_predictor.VolumePredictor":{__init__:[16,2,1,""],get_predicted_structure:[16,2,1,""],predict:[16,2,1,""]},"matminer.models":{mechanical_properties:[18,0,0,"-"],sound_velocity:[18,0,0,"-"],thermal_conductivity:[18,0,0,"-"]},"matminer.models.mechanical_properties":{BulkModulus:[18,1,1,""],Lames1stParam:[18,1,1,""],PWaveModulus:[18,1,1,""],ShearModulus:[18,1,1,""],YM:[18,1,1,""],YoungsModulus:[18,1,1,""],brittleness_index:[18,3,1,""],bulk_modulus:[18,3,1,""],bulkmodulus_coordination:[18,3,1,""],critical_fracture_toughness:[18,3,1,""],critical_stress:[18,3,1,""],fracture_toughness:[18,3,1,""],max_allowed_heatflow:[18,3,1,""],shear_modulus:[18,3,1,""],steadystate_heatflow:[18,3,1,""],strain_energy_releaserate:[18,3,1,""],stress_from_tempgradient:[18,3,1,""],thermal_shock:[18,3,1,""],thermal_stress:[18,3,1,""],vickers_hardness1:[18,3,1,""],vickers_hardness2:[18,3,1,""]},"matminer.models.mechanical_properties.BulkModulus":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""],properties_involved:[18,2,1,""]},"matminer.models.mechanical_properties.Lames1stParam":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""],properties_involved:[18,2,1,""]},"matminer.models.mechanical_properties.PWaveModulus":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""],properties_involved:[18,2,1,""]},"matminer.models.mechanical_properties.ShearModulus":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""],properties_involved:[18,2,1,""]},"matminer.models.mechanical_properties.YM":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""]},"matminer.models.mechanical_properties.YoungsModulus":{__init__:[18,2,1,""],calculate:[18,2,1,""],equation:[18,2,1,""],properties_involved:[18,2,1,""]},"matminer.models.sound_velocity":{SoundVelocityModel:[18,1,1,""],effective_cubic_elasticconstant:[18,3,1,""],sound_velocity:[18,3,1,""]},"matminer.models.sound_velocity.SoundVelocityModel":{__init__:[18,2,1,""],citation:[18,2,1,""],compute:[18,2,1,""]},"matminer.models.thermal_conductivity":{CahillSimpleModel:[18,1,1,""],cahill_integrand:[18,3,1,""],cahill_integrand_model:[18,3,1,""],cahill_integrand_summation:[18,3,1,""],callaway_integrand:[18,3,1,""],callaway_model:[18,3,1,""],clarke_model:[18,3,1,""],debye_model:[18,3,1,""],keyes_model:[18,3,1,""],slack_integrand:[18,3,1,""],slack_integrand_model:[18,3,1,""],slack_simple_model:[18,3,1,""]},"matminer.models.thermal_conductivity.CahillSimpleModel":{__init__:[18,2,1,""],calculate:[18,2,1,""]},"matminer.utils":{flattenDict:[5,3,1,""]},matminer:{data_retrieval:[6,0,0,"-"],datasets:[7,0,0,"-"],featurizers:[10,0,0,"-"],figrecipes:[12,0,0,"-"],learners:[16,0,0,"-"],models:[18,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:staticmethod","5":"py:attribute"},terms:{"1cl":10,"1st":10,"2004_elastic_properti":18,"2f0":18,"2nd":10,"2nd_mode":10,"2o3":6,"32x32":10,"39x39":10,"3o3":10,"6_2":18,"6b10908":10,"abstract":10,"boolean":10,"case":[0,8,10,15,17],"class":[3,6,8,10,13,15,16,17,18],"default":[10,15,16,18],"float":[3,6,10,15,16,18],"function":[3,5,10,15,18],"import":[3,4],"int":[6,10,15,18],"new":[0,15],"return":[3,6,10,15,16,18],"short":3,"static":[10,15],"switch":10,"transient":18,"true":[2,6,10,15,16],"try":6,"while":3,But:15,For:[0,3,4,10,15],Not:15,OPs:10,One:[4,15],The:[3,5,10,15],There:[3,4],These:15,Use:[3,15,18],Will:15,With:[10,15],__init__:[6,10,13,15,16,18],_mode:10,_modul:10,a1058:18,a9_paramet:18,a_i:10,abl:15,about:3,abov:[3,16,18],abs:[2,10],absolut:[10,16,18],abstractdata:10,abund:18,accept:15,access:[3,10],accord:[10,18],account:[10,15],accumul:[3,10],accur:18,acoust:18,across:10,acs:10,acta:10,actinid:10,adapt:2,add:[0,15],add_xy_plot:[2,15],added:[3,10,16],adding:10,addit:[10,15],address:18,adfm:18,adma:18,affect:15,affin:10,after:[10,15],again:10,aggarw:[0,1],aggreg:3,agnifingerprint:10,aim:3,ajain:10,alex:1,algo:16,algorithm:3,alireza:1,all:[2,3,4,10,15,16,18],all_attribut:10,alloi:18,allow:[3,6,18],alon:10,along:4,alreadi:4,also:[10,18],altern:15,amount:15,amplitud:18,analysi:[3,18],angl:10,angstrom:[10,18],ani:[3,15],anion:10,anisotropi:18,annot:15,annotations_color:15,annotations_text:15,annotations_text_s:15,anoth:[3,10,15],answer:16,anubhav:[1,10],apart:16,apatit:18,api:[2,3,6,10,15],api_kei:[2,6,15],appear:15,appli:15,applic:[3,15,18],approach:10,aps:10,area:[3,15,18],aren:15,arg:[6,10,15,16,18],argsort:2,argument:[3,10,15],arial:15,aris:18,around:[3,10,18],arr0:10,arr1:10,arrai:[3,6,10,13,15],art:3,arxiv:10,as_matrix:2,ashwin:1,assum:10,asta:1,atom:[0,2,3,10,16,18],atom_i:10,atom_j:10,atom_ofm:10,atomic_mass:[2,3],atomic_radiu:2,attribut:[2,3,10],author:10,auto:6,automat:15,avail:[2,3,10,15,18],averag:[3,10,16,18],avg:10,avg_anion_affin:10,avg_dev:10,avg_ionic_char:10,avg_mass:3,avoid:0,axi:[10,15],b61:10,back:[10,16],bad:16,bajaj:[0,1],balto:15,band:[0,3,10],band_gap:[2,3,6,10],bandcent:10,bandfeatur:10,bandstructur:[5,19],bandstructuresymmlin:10,bar:15,bar_chart:[2,15],bargap:15,base:[5,6,8,13,15,16,17,18,19],basefeatur:10,bash:4,basi:10,bcc:10,becaus:10,been:15,befor:0,behavior:[0,10],being:15,belong:15,below:[3,15],bent5:10,bent:10,berkelei:1,best:16,better:0,between:[10,15,16],beyond:18,bibtex:10,biggest:3,bin:[10,15],bin_siz:[10,15],binari:16,bismuth:18,blabla:5,black:[2,15],blackbodi:15,blend:18,block:3,blokhin:[0,1],blue:15,bluer:15,boil:3,boiling_point:2,bond:[10,16,18],bond_angl:10,bool:[6,10,15,16],bostrom:0,both:[10,15],bottom:15,botu:10,box:15,bpe:10,branch:10,branchpointenergi:10,brief:3,brittl:18,brittleness_index:18,broken:10,browser:15,bug:0,bulk:[3,18],bulk_modulu:18,bulkmodulu:18,bulkmodulus_coordin:18,bystrom:1,c_11:18,c_12:18,c_44:18,c_eff:18,c_xxxx:18,c_xxyi:18,c_yzyz:18,ca5:18,cahil:18,cahill_integrand:18,cahill_integrand_model:18,cahill_integrand_sum:18,cahill_integrand_summ:18,cahillsimplemodel:18,calc:10,calc_stat:10,calcium:18,calcul:[3,10,18],calculate_band_edg:10,call:[10,15,18],callawai:18,callaway_integrand:18,callaway_model:18,can:[2,3,4,10,15],capac:3,car:10,cas:18,cation:10,cbm:10,cell:[10,18],center:10,central:10,ch4b:18,chang:[3,4],chapter:18,charact:10,character:10,charg:10,chart:15,check:3,chem:10,chemic:[6,10],chen:[0,1],choos:[4,15,18],chosen:10,circl:15,circumst:18,citat:[3,10,18],citrin:[1,3,6],citrine_kei:6,citrinedataretriev:[3,6],citrineinformat:6,clark:18,clarke_model:18,clean_project:6,cleanup:0,click:15,client:6,clone:4,closer:16,closest:[10,15],coarsen:10,code:[0,3,4,15],codebas:0,coeffici:18,cohes:[0,10],cohesiveenergi:10,col_id:10,cold:18,coll:6,collaps:10,collect:[3,6],color:[2,13,15],colorscal:15,colorscale_rang:15,column:[2,3,6,10,15],com:[2,4,5,18],combin:[15,18],combine_by_el:10,come:[3,10],comma:15,command:4,commatsci:18,commit:[4,15],comp:10,compar:[3,18],compat:0,compil:3,complex:[0,3],compli:10,compon:10,composit:[0,2,3,5,19],composition_featur:3,compound:[3,10,16,18],comput:[2,3,6,10,18],conda:4,condit:18,conditionalvolumepredictor:16,conditionalvolumepredictortest:17,conduct:[10,18],config:6,configur:4,consid:10,consist:[0,10],constant:[15,18],constitu:10,constrain:18,construct:10,consult:0,contact:3,contain:[3,6,10,15],content:19,continuum:18,contributor:[3,6],convent:10,convert:[6,10],convert_none_to_zero:10,coordin:[10,15,18],copi:10,copper:18,core:10,correct:10,correspond:[10,15],cos:10,could:3,coulomb:10,coulombmatrix:[0,10],count:10,coupl:4,courier:15,cpd_possibl:10,crack:18,creat:[2,3,10,15],create_plot:15,credenti:15,criteria:[2,3,6],critic:18,critical_fracture_tough:18,critical_stress:18,cross:[2,18],cross_val_scor:2,crossvalid:2,cryst:10,crystal:[10,18],crystal_idx:10,csv:0,cte:18,cte_t:18,cubic:[10,18],current:[1,3,10,15],custom:3,cutoff:[10,16],d_nn:10,dash:15,data:[0,5,6,13,15,19],data_col:15,data_fil:[5,10],data_lst:10,data_retriev:[2,3,5,19],data_set_id:6,data_sourc:[2,10],data_typ:[3,6],databas:[2,3,6,10],datafram:[3,6,10,15],dataframe_load:[5,19],dataset:[2,5,19],datasettest:8,datetim:15,deby:18,debye_model:18,decod:6,decor:[3,10,19],dedic:3,defin:[2,10],definit:10,degre:10,delta:10,delta_op:10,delta_t:18,deml:10,deml_elementdata:[5,10],demldata:10,demonstr:3,denot:[10,18],densiti:[2,15,18],densityfeatur:10,depend:[4,10,15,18],descend:10,describ:[2,3,4,10,18],descript:[3,6],descriptor:[0,10],design:18,desir:[3,10],desired_featur:10,detail:[6,10,15],detect:6,determin:[0,10,15,16],develop:[3,10],development:4,deviat:[3,10],df_citrin:3,df_mp:[2,3],dft:2,diag_elem:10,diag_kind:15,diagaon:10,diagon:[10,15,18],diamond:18,dict:[6,10,13,15],dict_item:6,dictionari:[3,5,10,15],diego:1,differ:[3,10,16,18],differenti:10,difficult:3,dimens:10,dimensionless:18,direct:[10,15,18],direct_gap:10,disallow:6,discret:10,discrete_int:13,disk:15,displai:[2,13,15],dist:10,dist_exp:10,distanc:[10,16],distibut:10,distinct:10,distribut:10,divid:[10,15],doc:[0,6],document:[3,5,6,15],doe:[10,15],dog1:5,dog2:5,doi:[10,18],doing:6,don:[3,10],donni:1,dot:[6,15],down:10,download:18,drawn:15,droid:15,dropna:2,dunn:[0,1],e_above_hul:2,e_m:18,e_t:18,each:[3,4,10,13,15,18],earth:[15,18],easi:[3,4],edg:[10,18],edu:18,effect:18,effective_cubic_elasticconst:18,eigenvalu:10,either:[3,10,15],elast:[2,18],electr:15,electron:[10,16,18],electronaffin:10,electroneg:[0,3,10,16],electronegativitydiff:10,electronicradialdistributionfunct:10,electrostat:10,element:[0,3,10,16,18],elementfract:10,elementproperti:[2,10],els:[10,15,18],elsewher:3,email:10,emb:15,empirici:10,emploi:3,en_diff_stat:10,encod:3,end:[15,18],energi:[0,10,18],enforc:0,ensembl:2,enter:4,enthalpi:3,entir:3,entri:[2,6,10],environ:[0,2,4,6,10],equal:[10,15],equat:18,error:[15,16],error_arrai:15,error_arrayminu:15,error_direct:15,error_symmetr:15,error_typ:15,error_valu:15,error_valueminu:15,estim:10,eta:10,etc:[3,10,16],evalu:10,event:15,everi:10,everyon:3,everyth:4,evgeni:1,examin:2,exampl:[0,2,5,6,10,12,13,15,18],except:10,execut:3,exercis:3,exist:16,expans:18,expect:[10,16],experi:3,experiment:[3,6],explain:10,explicitli:[10,15],explor:2,expon:10,export_filenam:13,extens:15,extern:3,extra:10,extract:[2,3,6],extrem:16,extremum:10,f_ij:10,faber:10,fact:10,factor:[10,16,18],faghaninia:[0,1],fall:15,fals:[6,10,13,15],famili:15,far:16,fatiguefractur:18,fe2:10,fe2o3:[6,10],featur:[0,3,5,19],feature_importances_:2,feature_label:10,featurize_datafram:[2,10],fed:3,fere:10,fere_corr_stat:10,ferecorrect:10,few:[3,4],ffbad2:15,field:[3,6,10,15],fig:15,figrecip:[3,5,19],figur:18,file:[0,10,15,18],filenam:15,filepath:15,fill:15,filter:[2,3,6],filterwarn:2,find:[3,10,16],fingerprint:[0,10],finit:10,fire:15,first:[3,6,10,15,18],fit:10,fix:0,flag:10,flatten:[5,10],flattendict:5,flege:3,flexibl:3,flow:18,fold:2,folder:4,follow:[3,4,5,10,15,18],font:15,fontfamili:15,fork:3,form:[2,10,15],formal:10,format:[2,3,6,10,15],formation_energy_per_atom:[2,6,10],formula:[3,6,10,18],forward:10,fose1:18,found:[3,10,16],frac:10,frac_magn_atom:10,fraction:[0,10,18],fractur:18,fracture_mechan:18,fracture_tough:18,fracturemechan:18,framework:18,frequenc:[10,18],frequent:10,from:[3,5,6,10,15,16,18],from_preset:10,from_record:6,frost:[0,1],full:[3,4,18],fusion:3,g_i:18,gamma:[10,18],gamma_:18,gamma_p:18,gap:[3,10,15],gas:16,gaseou:16,gaussian:10,gaussian_kernel:10,gener:[3,10,15,18],geometr:10,germanium:18,get:[3,6,10],get_atom_ofm:10,get_bindex_bspin:10,get_cbm:10,get_composition_oxidation_st:10,get_datafram:[2,3,6],get_magpie_descriptor:3,get_mean_ofm:10,get_neighbors_of_site_with_index:10,get_ohv:10,get_order_paramet:10,get_order_parameter_feature_vectors_differ:10,get_order_parameter_stat:10,get_order_parameters_stat:10,get_predicted_structur:16,get_properti:10,get_pymatgen_descriptor:3,get_single_ofm:10,get_structure_ofm:10,get_valu:6,getter:[0,2],gga:10,gist:5,git:[0,4],github:[2,3,4,5,6],give:[10,16],given:[10,16],glassbrenn:18,global:0,globalsymmetryfeatur:10,googl:3,got:3,gov:10,gpa:2,grab:6,gradient:18,gravita:15,great:2,green:15,grei:15,griffith:18,griffith_theory_of_brittle_fractur:18,grifftheory1:18,group:[2,3,15],group_col:15,group_head:15,grow:18,gruneisen:18,guess:16,h_v:18,hackingmateri:[1,4],hald:18,half:18,hard:18,has:[3,10,15],have:[3,4,5,6,10,13,15],hbar:18,head:2,header:15,heat:[3,18],heatmap:15,heatmap_ex1:14,heatmap_exampl:[5,12,13],heatmap_plot:15,heatmapplot:13,height:[10,15],help:3,here:[2,3,4,15,16,18],heurist:3,heusler:18,hex:15,hexagon:[10,15],higarmi:5,high:18,higher:18,highest:[10,15],histnorm:15,histogram:[10,15],histori:0,hold:10,holder:10,holder_mean:10,holder_mean__2:10,home:4,homogen:18,homopolar:18,horizont:15,horton:1,host:3,hot:[10,15,18],hous:3,hover:15,hoverinfo:15,hovermod:15,how:[3,4],howev:3,hsl:15,hsv:15,htm:18,html:[10,15],http:[2,4,5,6,10,15,18],id1:5,id2:5,idea:16,ideal:10,ident:[10,15],identifi:10,idx:10,idx_field:6,ignor:[2,10],ignore_op_typ:10,iii:[15,16,18],imag:15,implement:[3,10,15],implementor:10,impress:18,improv:[0,3,16],includ:[3,10,15,18],inclus:6,increas:[10,15,16],indent:18,index:[6,10,15,18],index_colnam:15,index_mpid:6,indic:[2,10,15],individu:18,induc:18,infer:10,inform:[3,4,15],informat:[1,3],inher:10,initi:[10,16],inner:10,inorgan:18,input:[3,10,15],insid:15,instal:[0,15],instanc:16,institut:10,insuffici:18,insul:18,integ:[10,15],integr:[10,16,18],integrand:18,intend:16,intens:18,inter:10,interact:[10,15],interest:10,interfac:0,intergrand:18,intern:18,interpol:15,interv:15,invers:10,involv:3,ionic:[10,16,18],ionic_factor:16,ionic_radii:10,ionproperti:10,ipython:15,irwin:18,is_cbm:10,is_gap_direct:10,is_int:6,is_ox:16,isbn:18,iscategorical1:5,iscategorical2:5,isostructur:16,isotrop:18,issu:0,item:[6,10,15],iter:10,its:[3,4,10,15],itself:10,jain:[0,1,10],jallcom:18,jason:1,jet:15,jime:1,join:15,joseph:1,joul:18,journal:10,jpcc:10,jpeg:15,json:[3,5,6],jupyt:[3,15],just:[2,3],k_c:18,k_i:18,k_ic:18,k_vrh:2,kappa:18,keeff:10,kei:[2,6,10,15],kelvin:18,kernel:10,key:18,keyerror:15,keyes_model:18,kfold:2,kgm:18,kiran:1,know:3,known:[10,16,18],krr:10,kwarg:[10,18],kyle:1,lab:1,label:[10,15],lam:18,lambda:2,lamda:18,lame:18,lames1stparam:18,lanthanid:10,laplacian:10,laplacian_kernel:10,larg:[0,10],largest:10,last:[10,15],later:16,latest:[4,15],latter:[3,15],lattic:[10,18],lawrenc:1,layout:15,lbl:10,lbnl:10,learn:[2,3,6,18],learner:[5,19],least:15,led:1,left:15,legend:[2,15],len:[2,10],length:[10,15,18],less:10,let:[2,3],lett:10,lfs:0,librari:[2,3],lifepo4:3,lifepo:3,like:[6,10,13],limit:6,line:[2,3,10,15],linear:[15,18],linear_model:2,linearregress:2,linedash:15,lineshap:15,linewidth:15,link:[4,18],list:[3,6,10,13,15],load:18,load_dielectric_const:7,load_elastic_tensor:7,load_piezoelectric_tensor:7,loader:0,local:[0,10,15],locat:10,logan:1,logic:0,longest:10,longitudin:18,look:10,lower:0,lowest:15,lsop:10,lying:15,m_ij:10,m_prop:13,machin:[3,6],machine_learn:6,made:18,magnet:10,magpi:[3,10],magpiedata:10,mai:[4,10,15,16,18],main:[10,15],make:[3,10,15],make_plot:[2,5,12],mani:[0,4,18],map:[2,5,15],mapi_kei:[2,10],mapidoc:2,margin:15,margin_bottom:15,margin_left:[2,15],margin_right:15,margin_top:15,marker:15,marker_fil:15,marker_outline_color:15,marker_outline_width:[2,15],marker_s:15,mask:5,mass:[3,18],materi:[3,6,10,16,18],materials_id:6,materialsproject:[2,6],math:10,mathematica:3,mathew:[0,1],matplotlib:[3,5,12],matric:10,matrix:[6,10,15],matrix_column:6,matt:1,max:[3,6,10],max_allowed_heatflow:18,max_column:2,max_ionic_char:10,max_measur:6,max_result:6,max_row:2,maximum:[3,6,10,15,18],mayb:10,mean:[2,3,10,15],mean_ofm:10,mean_squared_error:2,meant:3,measur:[3,10],mechan:18,mechanical_properti:[5,19],melt:[3,18],melting_point:2,member:15,merit:18,messag:2,metal:10,method:[0,3,6,10,15],methodnam:[8,17],metric:2,min:[3,10],min_dist:10,min_measur:6,min_rel_dist:10,min_relative_okeeff:10,min_relative_vir:10,mine:3,miner:18,minimum:[6,10,15,16,18],minimumrelativedist:10,minor:0,misc:0,miss:6,mode:[2,10,15,18],model:[5,19],model_select:2,modif:18,modul:[3,19],moduli:[3,18],modulu:[2,18],molecul:10,molecular:18,mongo:[0,6],mongodataretriev:[3,6],mongodb:[3,6],mono:15,monoclin:10,montoya:1,more:[0,2,3,6,10,16],most:[3,10],motif:[0,10],move:0,mp_decod:6,mpd:0,mpdataretriev:[2,3,6],mpr:2,mprester:6,multipl:[0,10,15],multipli:[10,16],murti:18,must:[6,10,13,15,18],my_ohv:10,myplot:13,n_c:18,n_cb:10,n_estim:2,n_ex1_norm:10,n_job:2,n_numerical_mod:10,n_peak:10,n_split:2,n_vb:10,nacl:10,name:[0,3,6,10,15],nan:[2,6,10],nari:18,narrow:15,nation:1,natur:18,nature13184:18,ncsu:18,ndarrai:10,nder:18,ne509:18,nearest:10,necessari:[10,16],need:18,neg:2,neighbor:10,neighor:10,neutral:10,next:10,nil:1,nobl:16,non:18,none:[2,5,6,10,13,15,18],norm:10,normal:[10,15],notat:6,note:[4,10,15,18],notebook:[0,2,3,15],nov:15,now:2,nsite:[2,10],nth:10,nu_t:18,nuclear:10,num:6,num_atom:10,number:[0,2,3,6,10,15,18],numer:[3,10,15],numpi:[2,3,10,15],object:[6,10,13,15,16,18],observ:[10,18],obtain:[3,4,6,10],occur:10,occurr:15,octahedr:10,off:10,offlin:[2,15],ofm:10,ohv:10,old:15,om_point:5,omega:18,onc:3,one:[3,10,15,18],ong:1,onli:[6,10,15,16,18],onlin:15,oop:0,op_site_fp:10,opac:15,open:[3,4,15,18],oper:[3,15],opsitefingerprint:10,opstructurefingerprint:10,optic:18,option:[2,6,10,13,15],optyp:10,opval:10,orbit:10,orbitalfieldmatrix:[0,10],order:[10,18],org:[6,10,18],organ:3,origin:[10,15],orthorhomb:10,other:[3,10,15,16,18],otherwis:10,our:[3,4],out:[2,3],outlin:15,output:[2,3,5,10,15],over:[10,15,16,18],overal:16,overlap:3,overpass:15,own:[3,4],oxi:10,oxid:[0,10],p_ex1_norm:10,p_list:10,p_norm:10,packag:[4,19],pad:15,page:18,pair:[10,16],palett:15,panda:[3,6,10,15],paper:[3,10],param:15,paramet:[5,6,10,13,18],pars:[3,6],parse_matrix:6,parse_scalar:6,parse_vector:6,part:3,partial:[0,10],partialradialdistributionfunct:10,particular:6,pass:10,pbte:3,pdf:[15,18],peak1:10,peak2:10,peak:10,penal:10,per:[2,10,18],percent:15,percentag:[15,16],perfect:2,perform:[3,16,18],period:[3,10],period_tag:10,periodic_t:10,pernici:0,perro:5,pf_rf:2,pham:10,phase:10,phonon:18,php:6,phy:10,physic:18,physrev:18,physrevb:[10,18],picnic:15,ping:1,pip:4,pixel:15,place:18,plain:[10,18],planck:18,plastic:18,pleas:[3,15],plot:[5,12,15],plot_mod:[2,15],plot_titl:[2,15],plotli:[2,3,5,12],plotlyfig:[2,15],plymouth:18,pneigh:10,png:[13,15],po4:18,point:[3,10,15,18],pointer:10,poisson:18,polyhedra:10,popul:2,popular:3,portland:15,posit:10,possibl:[2,6,10],potenti:10,power:[3,10],prb:10,prdf:10,predict:[3,16,18],prefer:15,premis:15,presenc:18,preset:10,preset_nam:10,pretty_formula:2,primit:[10,18],print:[2,6],priori:10,probabl:15,problem:4,process:[3,18],produc:3,product:10,project:[0,3,6,10],prop:10,propag:18,properti:[2,3,6,10,18],properties_involv:18,property_nam:10,propertystat:10,propos:10,protect:10,provid:[3,10,15],pseudopotenti:3,pub:10,pull:3,purpos:6,put:[6,10],pwavemodulu:18,py3:0,pycookiecheat:19,pymatgen:[2,3,6,10,17],pymatgendata:[2,10],pymatgentest:17,pymongo:6,python:[3,4,15],q_2:10,q_4:10,q_6:10,q_bcc:10,q_bent:10,q_cn:10,q_lin:10,q_oct:10,q_reg_tri:10,q_sq:10,q_sq_pyr:10,q_tet:10,quantiti:[3,18],quantum:10,quaternari:18,queri:[0,3,6],question:3,quickli:10,r_c:10,r_central:10,r_i:10,r_ij:10,r_j:10,r_neighbor:10,r_therm:18,rac:10,radial:[10,18],radialdistributionfunct:10,radialdistributionfunctionpeak:10,radii:[3,10,16],radiu:[10,16],rainbow:15,rais:15,ralewai:15,random_st:2,randomforestregressor:2,rang:[6,10],range_elect:3,rate:18,rather:10,ratio:18,rdbu:15,rdf:[0,10],read:15,readili:3,realli:16,record:6,red:15,redesign:0,redf:10,reduc:18,ref:18,ref_structur:16,refactor:0,refer:[6,10,15,16,18],region:18,regress:10,rel:[10,15],relat:18,relationship:18,relax:18,releas:18,relev:2,remov:[0,2,6],remove_int:6,repeatedli:18,replac:[6,10],repo:[3,4],repositori:[3,4],repres:[2,3,10,15],represent:10,request:3,requir:[4,10,15,18],research:1,resist:18,resolut:15,resolv:10,respect:[3,10,15,18],result:[3,5,6,10,18],reteurn:10,retriev:[0,2,6,10],retrieve_citrin:[3,5,19],retrieve_mongodb:[5,19],retrieve_mp:[2,3,5,19],retrieve_mpd:[5,19],rev:10,rgb:15,rgba:15,rho:18,rich:3,right:15,rigid:18,rmse:16,rmse_scor:2,robust:10,roman:15,room:18,root:15,rough:10,round:2,row:[2,3,15],rowchowdhuri:1,rule:15,run:[4,10,16],runtest:[8,17],rupp:10,s10853:18,same:[3,10,15,16],sampl:15,san:[1,15],saurabh:1,save:15,sayan:1,scalar:6,scalar_column:6,scale:[10,15,16],scaled_vir:10,scatter:15,scatter_matrix:15,schema:3,schutt:10,scienc:[3,18],scikit:2,score:[2,15],screen:13,search:[3,6],second:[10,15,18],section:[3,18],see:[2,3,4,6,10,15,18],seem:15,seen:18,select:[3,15],select_column:15,separ:[4,10,15],seri:15,serif:15,server:15,servic:15,set:[0,2,4,6,10,15],set_opt:2,setup:4,sever:[0,2],shape:[15,18],sharp:18,shear:18,shear_modulu:18,shearmodulu:18,sheild:3,shell:10,shock:18,shortfal:18,should:[4,10],show:[3,6,15,18],show_column:6,show_offline_plot:15,showlegend:15,shown:18,shuffl:2,shyue:1,sigma:[10,18],sigma_c:18,sigma_t:18,sigma_ten:18,sign:10,silicon:18,similar:[3,15,16],simpl:18,simpli:4,sin:10,sinc:15,sine:10,sinecoulombmatrix:[0,10],singl:[3,6,10,15],site:[5,16,18,19],site_dict:10,size:[2,10,15,18],skip:15,sklearn:[2,3],slab:18,slack:18,slack_integrand:18,slack_integrand_model:18,slack_simple_model:18,small:[10,18],snse:18,soc:10,solid:[15,18],some:[0,3,4,15,18],someth:3,soon:3,sort:[0,6,10],sound:[3,18],sound_veloc:[5,19],soundvelocitymodel:18,sourc:[3,4,10],space:10,spacegroup:2,span:15,specfi:10,speci:[10,16],specif:[4,10,15],specifi:[2,3,10,15],speed:18,spin:10,spline:15,spread:16,springer:18,sq_pyr:10,sqrt:2,srmuniv:18,ssp:18,stabl:[10,16],stack:18,stage:16,standard:[3,10,15],start:[10,15],stat:[2,5,19],state:[0,3,10,18],statist:[2,3,10,18],std:[3,10],std_dev:[2,10],std_num:3,steadi:18,steadystate_heatflow:18,step:[10,15],still:15,stoichiometr:10,stoichiometri:10,str:[2,6,10,13,15,18],strain:18,strain_energy_releaser:18,strc:10,strength:18,stress:18,stress_from_tempgradi:18,strict:6,string:[6,10,15],struct1:10,struct2:10,struct:10,structur:[0,3,5,16,18,19],stuck:3,studi:3,style:[0,6,13,15],subclass:10,submit:3,submodul:[12,19],subpackag:19,subshel:10,successfulli:4,suggest:18,sulfid:18,sum:[10,15,16,18],sumlimits_:10,summat:18,sup:2,supercel:10,suppli:15,support:[10,15],svg:15,symbol:[2,15],symm:10,symmetr:10,syntax:3,system:[4,15,16],t_c:18,t_m:18,t_ph:18,tabl:3,tabul:3,tag:10,take:[3,10,16,18],taken:[5,15],target:[2,3,10],target_gap:10,teach:18,tell:3,temperatur:18,tensil:18,tent:10,term:18,termin:4,test:[0,2,5,6,15,16],test_cscl:17,test_cscl_ion:17,test_dataset:[5,7],test_dielectric_tensor:8,test_elastic_tensor:8,test_isostructur:16,test_piezoelectric_tensor:8,test_predict:17,test_si:17,test_volume_predictor:[5,16],testcas:[8,17],tet:10,tetragon:10,tetrahedr:10,tetrahedron:10,text:[2,15],textsiz:[2,15],than:[3,10,16,18],the_materials_api:6,thei:[3,15],them:[3,6],themselv:10,theori:18,thermal:18,thermal_conduct:[5,19],thermal_shock:18,thermal_stress:18,thermoelectr:18,theta:18,thi:[0,2,3,4,6,10,15,16,18],thick:15,thing:13,those:[6,10,18],through:[3,4],tick:15,ticksiz:[2,15],tild:1,time:[3,10,15,16,18],tip:18,titl:[15,18],tmetalfract:10,todo:10,tolist:15,too:[15,16],tool:[2,6],top:[10,15],topolog:18,total:[15,18],tough:18,toxic:18,trace:15,train:[2,3],transform:6,transit:10,transpar:15,transvers:18,transverse1:18,transverse2:18,treat:10,trick:10,triclin:10,trigon:10,tsymbal:18,tupl:[6,10,15],tutori:[3,18],two:[3,10,15,16,18],type:[3,10,15],typefac:15,typic:10,ultralow:18,under:18,underli:[10,15],underscor:10,understand:3,uniform:10,uniqu:[6,10],unit:[0,6,10,18],unittest:[8,17],unknown:16,unl:18,unlcm:18,unlik:16,unstabl:2,until:10,updat:[0,3,10],upon:15,usabl:3,usag:3,use:[2,3,4,6,10,15],use_colorscal:15,used:[2,3,6,10,15,18],useful:4,user:[3,4,15],usernam:15,uses:10,using:[2,3,10,15,18],util:[3,17,19],v_a:18,v_i:[10,18],v_l:18,v_m:18,v_t1:18,v_t2:18,valenc:[10,18],valence_attribut:10,valenceionicradiusevalu:10,valenceorbit:10,valid:[2,15],valor:5,valu:[2,3,5,6,10,15,16,18],variabl:[2,6,15],variant:10,variat:[10,18],varieti:3,variou:3,vbm:10,vector:[6,10],vector_column:6,veloc:[3,18],version:[4,15],vertic:15,via:10,vibrat:18,vicker:18,vickers_hardness1:18,vickers_hardness2:18,view:2,violin:15,violin_plot:15,vire:10,viridi:15,vo2:10,volum:[2,16,18],volume_predictor:[5,19],volumepredictor:16,volumepredictortest:17,voronoi:10,vpa:2,wai:[3,4,15,16],walk:3,want:[2,3,4],ward:[0,1],warn:[2,4,15],wave:18,wave_modulu:18,weak:18,web:15,websit:15,weight:[10,16,18],well:[3,16],were:4,what:6,when:[4,15,16],where:[3,6,10,15,18],wherea:10,wheter:10,whether:[6,10,15,16],which:[3,4,10,15,18],white:15,whose:10,wide:3,width:[2,10,15],wiki:[6,18],wikipedia:18,willighagen:10,window:10,winston:1,within:[3,10],work:[3,4,6,16],workflow:3,worst:16,would:10,wrap:3,write:3,www4:18,www:18,x_axis_typ:15,x_col:[2,15],x_end:15,x_label:15,x_start:15,x_titl:[2,15],xlabel:13,xy_lin:2,xy_param:2,xy_plot:[2,15],xyplot:13,xyscatter_ex1:14,xyscatter_exampl:[5,12,13],y_axis_typ:15,y_col:[2,15],y_label:15,y_pred:2,y_titl:[2,15],y_true:2,yet:18,ylabel:13,ylgnbu:15,ylorrd:15,you:[2,3,4,6,10],young:18,youngsmodulu:18,your:[2,3,4,6,10,15,16],yourself:10,z_i:10,z_j:10,zero:10,zero_op:10,zimmermann:[0,1],zinc:18,zone:18},titles:["MatMiner Changlog","MatMiner Contributors","Predicting bulk moduli with matminer","matminer (Materials Data Mining)","Installing matminer","matminer package","matminer.data_retrieval package","matminer.datasets package","matminer.datasets.test_datasets package","matminer.descriptors package","matminer.featurizers package","matminer.featurizers.data_files package","matminer.figrecipes package","matminer.figrecipes.matplotlib package","matminer.figrecipes.matplotlib.examples package","matminer.figrecipes.plotly package","matminer.learners package","matminer.learners.tests package","matminer.models package","matminer"],titleterms:{"import":2,Use:2,add:2,add_descriptor:9,automat:2,bandstructur:10,bandstructure_featur:9,base:10,bug:3,bulk:2,calcul:2,changelog:[0,3],chicago:1,cite:3,composit:10,composition_featur:9,content:[5,6,7,8,9,10,11,12,13,14,15,16,17,18],contribut:3,contributor:1,data:[2,3,10],data_fil:11,data_retriev:6,datafram:2,dataframe_load:7,dataset:[7,8],decor:5,deml_elementdata:11,descriptor:[2,3,9],determin:2,develop:4,exampl:[3,14],featur:[2,10,11],figrecip:[2,12,13,14,15],fit:2,follow:2,forest:2,from:2,get:2,group:1,hack:1,heatmap_exampl:14,instal:[3,4],issu:4,lbnl:1,learner:[16,17],linear:2,make_plot:15,materi:[1,2],matmin:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],matplotlib:[13,14],mechanical_properti:18,mine:2,mode:4,model:[2,18],modul:[5,6,7,8,9,10,11,12,13,14,15,16,17,18],moduli:2,most:2,obtain:2,other:1,our:2,overview:3,packag:[5,6,7,8,9,10,11,12,13,14,15,16,17,18],panda:2,persson:1,plot:[2,3,13],plotli:15,preambl:2,predict:2,project:2,pycookiecheat:5,quick:4,random:2,regress:2,report:3,result:2,retriev:3,retrieve_citrin:6,retrieve_mongodb:6,retrieve_mp:6,retrieve_mpd:6,rmse:2,similar:2,site:10,sound_veloc:18,stat:10,step:2,structur:10,structure_featur:9,submodul:[5,6,7,8,9,10,11,13,14,15,16,17,18],subpackag:[5,7,10,12,13,16],test:17,test_dataset:8,test_volume_predictor:17,thermal_conduct:18,tool:3,troubleshoot:4,univers:1,util:5,volume_predictor:16,what:2,xyscatter_exampl:14}})