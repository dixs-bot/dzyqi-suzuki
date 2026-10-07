import json, itertools
domains=["Chemistry","Materials Science","Biology","Physics","Interdisciplinary"]
sectors=["Academic","National Laboratory","Industrial R&D","Startup"]
regions=["North America","Europe","Asia-Pacific","Rest of World"]
years=[2021,2022,2023,2024,2025,2026]
dom={ # throughput_x, novelty_pct, success_pct, repro_gain_pct, hours_saved_pct, iterations_to_optimum
"Chemistry":(14.0,22,41,38,62,12),
"Materials Science":(11.0,27,38,34,58,10),
"Biology":(7.5,18,29,29,47,18),
"Physics":(5.0,15,26,22,35,24),
"Interdisciplinary":(9.0,24,33,31,52,15)}
sec={ # adoption index 2026 (0-100), maturity TRL, share of deployments %, throughput multiplier rel
"Academic":(48,4.5,38,0.9),"National Laboratory":(62,6.0,22,1.1),"Industrial R&D":(74,7.0,30,1.2),"Startup":(55,5.5,10,1.0)}
reg={"North America":(1.0,0.38),"Europe":(0.85,0.27),"Asia-Pacific":(1.1,0.28),"Rest of World":(0.45,0.07)}
ygrow={2021:0.22,2022:0.35,2023:0.52,2024:0.71,2025:0.88,2026:1.0}
records=[]
for d,s,r,y in itertools.product(domains,sectors,regions,years):
    t,n,su,rp,hs,it=dom[d]; a,trl,sh,m=sec[s]; rg,rs=reg[r]; g=ygrow[y]
    records.append(dict(domain=d,sector=s,region=r,year=y,
      adoption_index=round(a*rg*g,1),
      throughput_x=round(1+(t-1)*g*m*(0.8+0.2*rg),1),
      novelty_pct=round(n*(0.6+0.4*g)*(0.9+0.1*m),1),
      success_pct=round(su*(0.55+0.45*g)*(0.92+0.08*m),1),
      projects=round(40*rs*sh/10*g*(1+(t/10))*3)))
funding_years={2021:2.1,2022:3.0,2023:4.6,2024:7.2,2025:10.4,2026:14.0} # USD bn illustrative
fund_split={"Government grants":38,"Venture capital":27,"Corporate R&D":24,"Philanthropy and foundations":8,"Other":3}
fund_region={"North America":38,"Europe":27,"Asia-Pacific":28,"Rest of World":7}
partnerships=[("Academia–Industry",34),("National Lab–Industry",21),("Academia–National Lab",19),("Cross-border consortia",14),("Startup–Big Tech/Cloud",12)]
ip_years={2021:310,2022:470,2023:720,2024:1080,2025:1550,2026:2100}
ip_split={"AI-generated candidate compounds/molecules":34,"Process/protocol optimisation":26,"Lab automation hardware/software":22,"Models and algorithms":12,"Other":6}
commercial={"Licensing deals":(2021,12,2026,96),"Spin-outs":(2021,6,2026,41),"Pilot-to-production conversions":(2021,3,2026,28)}
gov=[("Bias and fairness audits",58,4),("IP and inventorship policy",44,4),("Explainability and provenance logging",52,5),("Hallucination mitigation (hybrid RAG)",61,5),("Human-in-the-loop approval gates",70,5),("Dual-use and biosecurity screening",39,5),("Interoperability standards (SiLA 2, OPC UA)",47,3),("Independent audit and peer review of agent output",31,4)]
repro=dict(baseline_variance_pct=18.0,sdl_variance_pct=7.0,failure_detection_hours_manual=36,failure_detection_hours_auto=4,automated_failure_mode_coverage_pct=64,protocol_logging_completeness_pct=93,manual_logging_completeness_pct=61,replication_success_manual_pct=62,replication_success_sdl_pct=84)
repro_year={2021:(15.0,52),2022:(13.2,58),2023:(11.0,66),2024:(9.0,74),2025:(7.8,80),2026:(7.0,84)} # sdl variance %, replication success %
paradigms=["Empirical","Model-based","Computational","Big-data","Generative AI"]
paradigm_era=["Pre-1600s","1600s–1900s","1950s–2000s","2000s–2020s","2020s–"]
paradigm_speed=[1,3,10,40,150] # illustrative relative cycle-speed index
gnn=[("SchNet",2017,"Continuous-filter convolutions for molecules/quantum interactions"),("CGCNN",2018,"Crystal graph convolutional network for property prediction"),("MEGNet",2019,"Universal graph networks for molecules and crystals"),("ALIGNN",2021,"Atomistic line graph NN incl. bond angles"),("M3GNet",2022,"Universal graph deep-learning interatomic potential for the periodic table")]
platforms=[("MARS","Multi-agent + robot system: 19 LLM agents, 16 domain tools; optimised perovskite nanocrystal synthesis within 10 iterations; designed core-shell-corona structure in 3.5 hours"),
("SciAgents","Bioinspired multi-agent graph reasoning for automated scientific discovery (Ghafarollahi & Buehler, Adv. Mater. 2025)"),
("Google AI Co-Scientist","Hypothesis generation, ranking and refinement across biomedicine, drug discovery, antimicrobial resistance and materials"),
("ADePT","Framework for assessing autonomous lab robotics; interoperability via SiLA 2 and OPC UA"),
("Closed-loop SDL (DMTA)","Design-make-test-analyze loop coupling AI planning with robotic execution"),
("Autonomous materials lab architectures","Scenario 1 single distributed agent vs multi-agent scenarios (Commun. Mater. 2026)")]
scen={ # parameters: base, optimistic, pessimistic
"adoption_2030_pct":(62,78,44),"throughput_x_2030":(12,18,7),"annual_funding_growth_pct":(28,40,10),"novelty_rate_2030_pct":(26,34,17),
"incident_prob_per_yr_pct":(6,4,12),"cost_per_experiment_usd_2026":(120,120,120),"cost_decline_per_yr_pct":(15,25,6),"experiments_per_lab_2026":(8000,8000,8000),
"discoveries_per_1000_exp_2026":(2.0,2.0,2.0),"discovery_rate_growth_pct":(20,35,8),"annual_risk_loss_usd_m":(12,8,30)}
M=dict(
title="Autonomous Scientific Discovery Intelligence Package: AI Agents, LLMs and Self-Driving Laboratories",
subtitle="Science Acceleration and Laboratory Automation — Evidence Synthesis and Strategic Outlook",
date="6 October 2026",
methodology_note="Qualitative findings (platforms, architectures, frameworks, references) derive from the supplied research synthesis. Where exact quantitative figures were not available, ILLUSTRATIVE/ESTIMATED values were created (marked 'illustrative') and are used identically in every deliverable. They are planning estimates for scenario analysis, not measured statistics, and must not be cited as empirical data.",
headline=dict(mars_agents=19,mars_tools=16,mars_iterations=10,mars_hours=3.5,
 avg_throughput_x=round(sum(v[0] for v in dom.values())/5,1),
 avg_novelty_pct=round(sum(v[1] for v in dom.values())/5,1),
 funding_2026_usd_bn=14.0,funding_2021_usd_bn=2.1,patents_2026=2100,patents_2021=310,
 sdl_variance_pct=7.0,manual_variance_pct=18.0),
domains=[dict(domain=d,throughput_x=v[0],novelty_pct=v[1],success_pct=v[2],repro_gain_pct=v[3],time_saved_pct=v[4],iterations_to_optimum=v[5]) for d,v in dom.items()],
sectors=[dict(sector=s,adoption_index=v[0],maturity_trl=v[1],deployment_share_pct=v[2],throughput_multiplier=v[3]) for s,v in sec.items()],
regions=[dict(region=r,adoption_factor=v[0],project_share=v[1],funding_share_pct=fund_region[r]) for r,v in reg.items()],
years=years,adoption_growth_index={str(k):v for k,v in ygrow.items()},
funding=dict(by_year_usd_bn={str(k):v for k,v in funding_years.items()},by_source_pct=fund_split,by_region_pct=fund_region,partnerships_pct=dict(partnerships)),
ip=dict(patents_by_year={str(k):v for k,v in ip_years.items()},by_type_pct=ip_split,commercial={k:dict(y0=v[0],v0=v[1],y1=v[2],v1=v[3]) for k,v in commercial.items()}),
governance=[dict(framework=g[0],adoption_pct=g[1],maturity_1to5=g[2]) for g in gov],
reproducibility=repro,reproducibility_by_year={str(k):dict(sdl_variance_pct=v[0],replication_success_pct=v[1]) for k,v in repro_year.items()},
paradigms=[dict(name=n,era=e,speed_index=s) for n,e,s in zip(paradigms,paradigm_era,paradigm_speed)],
gnn_models=[dict(name=n,year=y,note=t) for n,y,t in gnn],
platforms=[dict(name=n,description=t) for n,t in platforms],
scenarios={k:dict(base=v[0],optimistic=v[1],pessimistic=v[2]) for k,v in scen.items()},
risks=["Dual-use and uncontrolled hypothesis exploration","Bias in training data and models","Hallucination in LLM agents (mitigated by hybrid RAG)","IP and inventorship ambiguity","Explainability gaps","Interoperability/vendor lock-in","Erosion of peer-review capacity","Deskilling of human scientists"],
ethics=["Bias","Intellectual property","Explainability","Hallucination mitigation via hybrid retrieval-augmented generation (RAG)"],
recommendations=["Adopt closed-loop DMTA pilots in chemistry and materials first, where throughput gains are highest","Standardise on SiLA 2 and OPC UA and assess robotics with ADePT","Mandate human approval gates and full provenance logging","Deploy hybrid RAG with source-grounded verification to curb hallucination","Establish dual-use screening and independent audit before scaling","Fund open-source AI infrastructure and shared data standards","Redefine scientist roles toward goal-setting, oversight and critical analysis","Update IP and peer-review policy for AI-generated discoveries"],
references=[
"Ghafarollahi, A.; Buehler, M. J. SciAgents: automating scientific discovery through bioinspired multi-agent intelligent graph reasoning. Adv. Mater. 2025, 37, e2413523.",
"Chen, C.; Ong, S. P. A universal graph deep learning interatomic potential for the periodic table. Nat. Comput. Sci. 2022, 2, 718–728.",
"Chen, C.; Ye, W.; Zuo, Y.; Zheng, C.; Ong, S. P. Graph networks as a universal machine learning framework for molecules and crystals. Chem. Mater. 2019, 31, 3564–3572.",
"Choudhary, K.; DeCost, B. Atomistic line graph neural network for improved materials property predictions. npj Comput. Mater. 2021, 7, 185.",
"Schütt, K. et al. SchNet: a continuous-filter convolutional neural network for modeling quantum interactions. arXiv:1706.08566, 2017.",
"Xie, T.; Grossman, J. C. Crystal graph convolutional neural networks for an accurate and interpretable prediction of material properties. Phys. Rev. Lett. 2018, 120, 145301.",
"Dagdelen, J. et al. Structured information extraction from scientific text with large language models. Nat. Commun. 2024, 15, 1418.",
"From large language models to AI agents in energy materials research: enabling discovery, design, and automation. AI Agent 2025. https://www.oaepublish.com/articles/aiagent.2025.03",
"Managing autonomous materials labs with multi-agent AI and its implications for the science of science. Commun. Mater. 2026. https://www.nature.com/articles/s43246-026-01219-5",
"The ADePT framework for assessing autonomous laboratory robotics. Commun. Chem. 2026. https://www.nature.com/articles/s42004-026-01932-9"],
records=records)
json.dump(M,open('/tmp/master.json','w'),indent=1,ensure_ascii=False)
print(len(records),M['headline'])
